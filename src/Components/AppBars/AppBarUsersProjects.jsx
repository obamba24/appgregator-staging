import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,Badge,SimpleGrid,
	input, Button, Spacer, Input} from '@chakra-ui/react';
import axios from 'axios'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';
import { Link } from 'react-router-dom';

function AppBarUsersProjects() {
	const [projects,setProjects]=useState();
	const [apiKey,setApiKey]=useState('kodok');
	const [apiSpinner,setApiSpinner]=useState(false)

	

	const handleRefresh=async()=>{
		//get from cloud function new api key
		setApiSpinner(true)
		console.log('in handlre refresh')
		axios.get('https://us-central1-appgregator.cloudfunctions.net/createApiKey')
      .then(res => {
		console.log('apikey=',res)
		setApiSpinner(false)
		setApiKey(res.data)
      }).catch((error)=> console.log(error,'error'))
	 
	}
	const getProjects=async()=>{
		const docRef = doc(db, "appgregator_user", "faizal.edrus@gmail.com");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			console.log(data.projects)
		  	setProjects(data.projects)
		} else {
		  console.log("No such document!");
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
			<Text fontSize='2xl' borderBottom='1px'>{project}</Text> 
			))
			:
			<Spinner/>}

		  	</Box>
			
			<Box display='flex' alignSelf='end'>
			  <Link to='/projects'><Button marginTop='5px' bg='#ffd600' >Add new project</Button></Link>
			</Box>
			
	</Box>
	<Box p='5' borderLeft='1px'  width='100%'>
		<Box display='flex' flexDirection='row' >
			<Heading>Users</Heading>
			<Spacer/>
			<Button bg='#ffd600'>Add new user</Button>
		</Box>
		<Box width='100%' background='gray.50' p='5' borderRadius='5'>
		<Text>Your API Key for qantor.co.id</Text>	
			<Box display='flex' flexDirection='row' >
				<Input m='2' p='5' isReadOnly value={apiKey}/>
				{apiSpinner?<Spinner/>:<></>}
				<Button m='2' p='5' bg='#ffd600' onClick={()=>handleRefresh()}>Refresh API</Button>
			</Box>
		</Box>
		<Box marginTop='2'>
		<SimpleGrid columns={{ base: 2}} 
		gap={{ base: '2'}}>
			
			<AppCardIntegration 
			image='https://cdn.pixabay.com/photo/2018/05/19/21/39/toad-3414441__340.jpg'
			name='nama'
			status='status'
			price='0.006'
			description='margaretha@gmail.com'
			connection='3'/>

			<AppCardIntegration 
			image='https://cdn.pixabay.com/photo/2018/05/19/21/39/toad-3414441__340.jpg'
			name='nama'
			status='status'
			price='0.002'
			connection='1'/>

		</SimpleGrid>
		</Box>
	</Box>
</Box>
	</>
	
  )
}

export default AppBarUsersProjects