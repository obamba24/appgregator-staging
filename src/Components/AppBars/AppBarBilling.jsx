import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,Badge,
	 Button, Spacer, Input,SimpleGrid, Center} from '@chakra-ui/react';

import { doc, getDoc } from "firebase/firestore";
import {db} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';

function AppBarBilling() {
	const [projects,setProjects]=useState();
	const [apiKey,setApiKey]=useState('kodok');

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
	
	</Box>
	<Box p='5' borderLeft='1px'>
		<Box display='flex' flexDirection='row' >
			<Heading>Billing</Heading>
			<Spacer/>
			<Button bg='#ffd600'>Add Deposit</Button>
		</Box>
		<Box width='100%' p='5' borderRadius='5'>
			<SimpleGrid columns={{ base: 3}} m='2'>
			<Box  marginRight='2' background='gray.50' p='5' alignSelf='center' borderRadius='10px'>
				<Text>Your current balance</Text>	
				<Heading>$39</Heading>
				</Box>

			<Box marginRight='2'  background='gray.50' p='5' alignContent='center' borderRadius='10px'>
			<Text>Transaction in last 30 days</Text>	
			<Heading>$20</Heading>
			</Box>

			<Box  background='gray.50' p='5' alignContent='center' borderRadius='10px'>
			<Text>Transaction in last 30 days</Text>	
			<Heading>$20</Heading>
			</Box>

			</SimpleGrid>
			<SimpleGrid columns={{ base: 2}} gap='2' m='2'>

				<AppCardIntegration 
				image='https://seeklogo.com/images/S/stripe-logo-4039DEE4FE-seeklogo.com.jpg'
				name='$50'
				status='Pending'
				description='Payment on 23 Jan 2021'
				/>
				<AppCardIntegration 
				image='https://seeklogo.com/images/S/stripe-logo-4039DEE4FE-seeklogo.com.jpg'
				name='$75'
				status='Paid'
				description='Payment on 23 Jan 2021'/>
			</SimpleGrid>
		</Box>
	</Box>
</Box>
	</>
	
  )
}

export default AppBarBilling