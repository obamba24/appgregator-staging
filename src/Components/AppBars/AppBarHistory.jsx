import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,SimpleGrid} from '@chakra-ui/react';

import { doc, getDoc } from "firebase/firestore";
import {db} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';


  
function AppBarHistory() {
	const [projects,setProjects]=useState();
	const [viewProject,setViewProject]=useState()

	const getProjects=async()=>{
		const docRef = doc(db, "appgregator_user", "faizal.edrus@gmail.com");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			console.log(data.projects)
		  	setProjects(data.projects)
			setViewProject(data.projects[0])
		} else {
		  console.log("No such document!");
		}

	}

	const handleProject=async(data)=>{
		setViewProject(data)
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
		<SimpleGrid columns={{ base: 1}} 
		gap={{ base: '4'}}>
			<AppCardIntegration 
			image='https://cdn.pixabay.com/photo/2018/05/19/21/39/toad-3414441__340.jpg'
			name='nama'
			status='status'
			price='0.006'
			description='ini desktirps'
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
	</>
	
  )
}

export default AppBarHistory