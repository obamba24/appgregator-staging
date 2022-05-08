import { Box,Text, Spinner ,Heading,
	Button, Spacer,AvatarGroup,Avatar,SimpleGrid} from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from 'react'
import {db,auth} from "../../Config/firebase"
import { doc, getDoc} from "firebase/firestore";
import { Link } from 'react-router-dom'


function AppBarAppgregate() {
	const [app,setApp]=useState('')
	const [countApp,setCountApp]=useState('')
	const [projects,setProjects]=useState();
	const [handleProject,setHandleProjec]=useState();
	const [viewProject,setViewProject]=useState();

	const email=auth.currentUser.email;

	const getProjects=async()=>{
		try{
			const docRef = doc(db, "appgregator_user", email);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const data = docSnap.data();
				// console.log(data.projects)
				setProjects(data.projects)
				setViewProject(data.projects[0])
			} else {
			console.log("No such document!");
			}
		}
		catch(error){
			console.log(error)
		}
	}

	const handleStep=(data)=>{
		console.log('handle Step')
	}

	useEffect(() => {
		getProjects()
	  return () => {
		setProjects('')
	  }
	}, [])
	
  return (
	<Box p={'5'} display='flex' flexDirection='row'>
		<Box p='5'>
			<Heading>Projects</Heading>
		{projects?
		projects.map((project) => (
		<Text key={Math.random()} fontSize='2xl' borderBottom='1px' onClick={()=>handleProject(project)}>{project}</Text> 
		))
		:
		<Spinner/>}
		
		</Box>
		<Box p='5' borderLeft='1px' width='100%'>
			<Box display='flex' flexDirection='row' >
				<Heading>Appgregator - {viewProject}</Heading>
				<Spacer/>
				<Link to='/appgregate/new'>
					<Button bg='#ffd600'>New Appgregator</Button>
				</Link>
			</Box>
			<Box width='full' m='5' p='5' bg='gray.50' borderRadius='md' >
				<SimpleGrid columns={{ base: 1,sm:1,md:1,lg:3}} m='2' alignItems='center'>
					<Box alignItems='center'>
						<AvatarGroup size='md' >
							<Avatar name='Ryan Florence' src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/fc0f3e91-9bbf-41be-efde-5bafd31e0d00/sthumbnail' />
							<Avatar name='Segun Adebayo' src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/ceb71028-c41e-4aa0-6e6e-b48beeac8d00/sthumbnail' />
							<Avatar name='Kent Dodds' src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/59f9771f-b076-4000-0044-fa641db9cf00/sthumbnail' />
							<Avatar name='Prosper Otemuyiwa' src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/4497a30d-1ae8-4871-2c89-cd468c9c0100/sthumbnail' />
							<Avatar name='Christian Nwamba' src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/4497a30d-1ae8-4871-2c89-cd468c9c0100/sthumbnail' />
						</AvatarGroup>
						<Box>
						<Button m='2' color='white' bg='green'>Edit</Button>
						<Button m='2' color='white' bg='blue'>Duplicate</Button>

						</Box>
					</Box>
					<Box>
						<Heading m='2'>Koneksi kodok</Heading>
						<Text>ID:02asd123</Text>
					</Box>
					<Box m='2' alignSelf='center' textAlign='center'>
						<Text>Connections : 2</Text>
						<Text>Transactions : 230</Text>
						<Button m='2' color='white' bg='tomato'>Deactivate</Button>
					</Box>
				</SimpleGrid>
				<Box>
				<Text>Sendgrid -> google sheets -> kodok -> webhook</Text>

				</Box>
			</Box>	
		</Box>
	</Box>
  )
}

export default AppBarAppgregate