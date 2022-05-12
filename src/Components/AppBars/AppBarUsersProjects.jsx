import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,Badge,SimpleGrid,Alert,
	AlertIcon,
 Button, Spacer, Input} from '@chakra-ui/react';
import axios from 'axios'
import { doc, getDoc,getDocs,updateDoc,orderBy,query,arrayRemove,serverTimestamp,collection,setDoc, arrayUnion, limit} from "firebase/firestore";
import {db,auth} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';
import { Link } from 'react-router-dom';
import { getMessaging, onMessage } from "firebase/messaging";

				
function AppBarUsersProjects() {
	const [projects,setProjects]=useState('');
	const [apiKey,setApiKey]=useState('NO API KEY YET, please create a new API key');
	const [apiSpinner,setApiSpinner]=useState(false)
	const [viewProject,setViewProject]=useState('');
	const [master,setMaster]=useState('');
	const [users,setUsers]=useState();
	const [userInput,setNewUserInput]=useState();
	const [userSaveInput,setUserSaveInput]= useState();
	const [alert,setAlert]=useState(false)
	const email = auth.currentUser.email;

	const messaging = getMessaging();
				onMessage(messaging, (payload) => {
				// console.log('Message received. ', payload);
				// ...
				});
	const handleRefresh=async()=>{
		//get from cloud function new api key
		setApiSpinner(true)
		axios.get('https://us-central1-appgregator.cloudfunctions.net/createApiKey')
      .then(res => {
		setApiSpinner(false)
		return res
      })
	  .then(api=>{
		 const time = Math.floor(Date.now() / 1000);
		 try{
			if(apiKey!=='NO API KEY YET, please create a new API key'){
			}
			const removeApi=updateDoc(doc(db, `appgregator_api_key`, email), {
			api:arrayRemove(apiKey),
			project_api:arrayRemove(viewProject+'_'+apiKey)
			},{ merge: true });

			if(removeApi){
		  	const apiRef = setDoc(doc(db, `appgregator_api_key`, email), {
			api : arrayUnion(api.data),
			project:arrayUnion(viewProject),
			project_api:arrayUnion(viewProject+'_'+api.data),
			email:email
		  }, { merge: true });

		  let docRef
		  if(apiRef){
		  docRef = setDoc(doc(db, `appgregator_api_key/${email}/${viewProject}`, api.data), {
			projects: viewProject,
			email:email,
			timestamp :serverTimestamp(),
			time:time
		  }, { merge: true });
		}
		setApiKey(api.data)
		  return docRef;
	}}
	catch(error){ console.log(error)}
		})
		.then(docref=>{console.log('Updated API Key')})
	  	.catch((error)=> console.log(error,'error'))
	 
	}
	
	const getProjects=async()=>{
		const docRef = doc(db, "appgregator_user", email);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
		  	setProjects(data.projects)
			setViewProject(data.projects[0])
			getAdminStatus(data.projects[0])

			// console.log(`appgregator_api_key/${email}/${data.projects[0]}`)
			const q = query(collection(db, 
				`appgregator_api_key/${email}/${data.projects[0]}`), 
				orderBy("time", "desc"), limit(1));
			const apiSnap = await getDocs(q);
			apiSnap.forEach((doc) => {
				setApiKey(doc.id);
			  });

		} else {
		  console.log("No such document!");
		}
		// const apiRef = doc(db, `appgregator_api_key/${email}/${data.projects[0]}`, email);
		// const q = query(collection(db, `appgregator_api_key/${email}/${data.projects[0]}`), where("project", "==",data.projects[0] ) ,orderBy("timestamp"));
		// const apiSnap = await getDoc(q);
	}

	const handleProject = async(data)=>{
		setViewProject(data)
		getAdminStatus(data)
		// console.log(`appgregator_api_key/${email}/${data}`)
		const q = query(collection(db, 
			`appgregator_api_key/${email}/${data}`), 
			orderBy("time", "desc"), limit(1));
		const apiSnap = await getDocs(q);
		if(!apiSnap.empty)
		apiSnap.forEach((doc) => {
			setApiKey(doc.id);
		  });
		  else setApiKey('NO API KEY YET, please create a new API key')
	}

	const getAdminStatus = async(project)=>{
		const docRef = doc(db, "appgregator_projects", project);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			setUsers('')
			const data = docSnap.data();
			const findMaster=data.master.find((x)=>x===email)
			setMaster(findMaster)
			setUsers(data.user)
		} else {
		  console.log("No such document!");
		}
	}

	const handleSaveUser= async()=>{
		console.log('di handleSaveUser',userSaveInput)
		try {
			const docRef = await setDoc(doc(db, "appgregator_projects", viewProject), {
				projects: viewProject,
				user: arrayUnion(userSaveInput)
			  }, { merge: true });
			  console.log('email=',userSaveInput)

			  const userRef = await setDoc(doc(db, "appgregator_user", userSaveInput), {
				projects: arrayUnion(viewProject)
			  }, { merge: true });
			//   console.log("Document written with ID: ", docRef,userRef);
			  getAdminStatus(viewProject)
			  //should show notification here
			  setAlert(
				  {
					  message:"Success adding new users",
					  status:"success"
					})
				setTimeout(() => {
					setAlert('')
				}, 10000);
			  setNewUserInput(false)
		} catch (error) {
			console.log(error)
		}
		
	}

	useEffect(() => {
	getProjects()
	  return () => {
		setProjects('')
	  }
	}, []);
	
  return (<>
  <Box p={'5'} display='flex' flexDirection='row' >
	  <Box p='5' height='100%'alignContent='space-between'>
		  <Box>
		  <Heading>Projects</Heading>
			{projects?	
			projects.map((project) => (
			<Text fontSize='2xl' borderBottom='1px' key={project} onClick={()=>handleProject(project)}>{project}</Text> 
			))
			:
			<Spinner/>
			}

		  	</Box>
			<Box display='flex' alignSelf='end'>
			  <Link to='/projects'><Button marginTop='5px' bg='#ffd600' >Add new project</Button></Link>
			</Box>
			
	</Box>
	<Box p='5' borderLeft='1px'  width='100%'>
		<Box display='flex' flexDirection='row' >
			<Heading>API Key {viewProject}</Heading>
			
		</Box>
		<Box width='100%' background='gray.50' p='5' borderRadius='5'>
		<Text>Your API Key for {viewProject}</Text>	
			<Box display='flex' flexDirection='row' >
				<Input m='2' p='5' isReadOnly value={apiKey}/>
				{apiSpinner?
				<Button
					m='2' p='5' bg='#ffd600'
					isLoading
					loadingText='Loading'
					colorScheme='teal'
					variant='outline'
					spinnerPlacement='start'
				/>
				:
				<Button m='2' p='5' bg='#ffd600' onClick={()=>handleRefresh()}>Create new API</Button>
				}
			</Box>
		</Box>
		<Box marginTop='2'>
		{alert?
				<Alert status={alert.status} m='2px'>
					<AlertIcon />
					{alert.message}
				</Alert>:
					<></>
					
			}
		<Box display='flex' flexDirection='row' >
			<Heading>Users {viewProject}</Heading>
			<Spacer/>
		{master===email?
			userInput?
			<>	
				<Input placeholder='user email address' maxWidth='200px' onChange={(e)=>setUserSaveInput(e.target.value)}/>
				<Button bg='#ffd600' onClick={()=>handleSaveUser() }>Save</Button>
			</>
			:
			<><Button bg='#ffd600' onClick={()=>setNewUserInput(true)}>Add new user</Button></>
		:
		<></>
		}
		</Box>
		<SimpleGrid columns={{ base: 2, sm:1,md:2,lg:3}} 
		gap={{ base: '2'}}>

		{master===email? users.map((email)=>
			<AppCardIntegration 
			status={master===email?'owner':'user'}
			description={email}/>)
			:
			<></>
		}

		</SimpleGrid>
		</Box>
	</Box>
</Box>
	</>
	
  )
}

export default AppBarUsersProjects