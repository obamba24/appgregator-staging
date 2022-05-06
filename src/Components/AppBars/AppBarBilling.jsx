import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,Badge,
	input, Button, Spacer, Input,SimpleGrid} from '@chakra-ui/react';

import { doc, getDoc } from "firebase/firestore";
import {db} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';

function AppBarBilling() {
	const [projects,setProjects]=useState();
	const [apiKey,setApiKey]=useState('kodok');

	const handleRefresh=async()=>{
		//get from cloud function new api key
		setApiKey(Math.random())
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
  <Box p={'5'} display='flex' flexDirection='row'>
	  <Box p='5'>
		  <Heading>Projects</Heading>
	{projects?
	projects.map((project) => (
	<Text fontSize='2xl' borderBottom='1px'>{project}</Text> 
	))
	:
	<Spinner/>}
	<Button marginTop='5px' bg='#ffd600'>Add new project</Button>
	</Box>
	<Box p='5' borderLeft='1px'>
		<Box display='flex' flexDirection='row' >
			<Heading>Billing</Heading>
			<Spacer/>
			<Button bg='#ffd600'>Add Deposit</Button>
		</Box>
		<Box width='100%' background='gray.50' p='5' borderRadius='5'>
		<Text>Your current balance</Text>	
			<Box display='flex' flexDirection='row' >
				<Input m='2' p='5' isReadOnly value={apiKey}/>
			</Box>
			<SimpleGrid columns={{ base: 1}} gap={{ base: '4'}}>
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
		<Box >
			
			
			
		</Box>
	</Box>
</Box>
	</>
	
  )
}

export default AppBarBilling