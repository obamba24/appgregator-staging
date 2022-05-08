import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,SimpleGrid} from '@chakra-ui/react';

import { doc,orderBy, getDoc,getDocs,collection,query,where } from "firebase/firestore";
import {db,auth} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';


  
function AppBarHistory() {
	const [projects,setProjects]=useState();
	const [viewProject,setViewProject]=useState();
	const [histories,setHistories]=useState();
	const email=auth.currentUser.email;

	const getProjects=async()=>{
		const docRef = doc(db, "appgregator_user", email);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			console.log(data.projects)
		  	setProjects(data.projects)
			setViewProject(data.projects[0])
			getHistory(data.projects[0])
		} else {
		  console.log("No such document!");
		}

	}

	const handleProject=async(data)=>{
		setViewProject(data)
		getHistory(data)
	}
	
	const getHistory=async (data)=>{
		const citiesRef = collection(db, "appgregator_history");

		// Create a query against the collection.
		const q = query(citiesRef, where("project", "==", data));
		console.log('executing q')
		const querySnapshot = await getDocs(q);
		let dataArray=[]
		querySnapshot.forEach((doc) => {
		// console.log(doc.id, " => ", doc.data());
		dataArray.push(doc.data())
		});
		setHistories(dataArray)
	}


	useEffect(() => {
	getProjects()
	  return () => {
		setProjects('')
	  }
	}, []);
	
  return (<>
  <Box p={'5'} display='flex' flexDirection='row'>
	<Box p='5'>
		  <Heading>Projects</Heading>
		{projects?
		projects.map((project) => (<Text key={Math.random()} borderBottom='1px' fontSize='2xl' onClick={()=>handleProject(project)}>{project}</Text> ))
		:
		<Spinner/>}
	</Box>
	<Box p='5' borderLeft='1px' width='100%'>
	<Heading>History - {viewProject}</Heading>
		<SimpleGrid columns={{ base: 1, sm:1, md:1,lg:2}} 
		gap={{ base: '4'}}>
			
			{histories?
			histories.map((history) => 
			(
				<AppCardIntegration 
				name={history.appgregator}
				status={history.project}
				price={history.price_per_transaction}
				description={`API Calls through ${history.appgregator} with total of ${history.total_transaction} x $${history.price_per_transaction} = $${history.total_price}`}
				connection={history.total_transaction}/> ))
			:
			<AppCardIntegration 
				name='NO HISTORY YET'
				/>
				}


		</SimpleGrid>
			
	</Box>
</Box>
	</>
	
  )
}

export default AppBarHistory