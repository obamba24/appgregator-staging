import React, { useEffect, useState } from "react";
import {
	Box,
	Heading,
	SimpleGrid,useDisclosure,Button,
	Stack, Flex, Center,useColorModeValue,Icon,
	Text,ButtonGroup,IconButton, Image,
	useColorModeValue as mode,Input,
	Spinner,
  } from '@chakra-ui/react'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../Config/firebase"
import { Link } from 'react-router-dom';

import { AppCardCategory } from "../AppComponents/AppCardCategory";
import AppCardApps from "../AppComponents/AppCardApps";
import AppCardIntegration from "../AppComponents/AppCardIntegration"

function AppBarIntegration() {
	const [data,setData]=useState('')
	const [rawData,setRawData]=useState('')
	const [integration,setIntegration]=useState('')
	const [projects,setProjects]=useState();
	const [chooseProjects,setChooseProjects]=useState();

	const getData= async ()=>{
		const docRef = doc(db, "appgregator_display", "app_list");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			setRawData(data.data)
		  	setData(data.data)
			
		} else {
		  console.log("No such document!");
		}
	}

	const getProjects=async()=>{
		const docRef = doc(db, "appgregator_user", "faizal.edrus@gmail.com");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			console.log(data.projects, 'projects')
		  	setProjects(data.projects)
			  setChooseProjects(data.projects[0])
			  getIntegration(data.projects[0])
			  
		} else {
		  console.log("No such document!");
		}
	}

	const handleSearch=(searchKeyword)=>{
		var filteredData = rawData.filter(search => {
			if (searchKeyword === '') {
			  return search;
			} else {
			  return search.name.toLowerCase().includes(searchKeyword)
			}
		  })
		setData(filteredData)
	}

	const getIntegration = async(data)=>{
		
		const docRef = doc(db, "appgregator_projects", data);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
		  	// console.log("Document data:", Object.entries(data));
		  	setIntegration(Object.entries(data))
		} else {
		  console.log("No such document!");
		}
	}

	const getConnection = (data) =>{
		// console.log(data)
		if(integration){
		const filtered = integration.filter(([key, value]) => key === data);
		if (filtered.length>0)return filtered[0][1]
		else return 0
	}
	else return 0
	}
	
	useEffect(() => {
		getData();
		getProjects();
		// getIntegration();
	  return () => {
		setData('')
		// setIntegration('')
		setProjects('')
	  }
	}, [])
	

  return (

	<Box
	mx="auto"
	px={{ base: '4', md: '8', lg: '12' }}
	py={{ base: '6', md: '8', lg: '12' }}
>
	<Flex 
		justify='space-between'
		align={{ base: 'start', md: 'center' }}
		direction={{ base: 'column', md: 'row' }}
	>
		<Heading size="lg" mb={{ base: '3', md: '0' }}>
		Appgregator integration
		</Heading>
		<Input placeholder='search' width ='300px' maxW='300' onChange={(e)=>handleSearch(e.target.value)}/>
	</Flex>
	<Box display='flex' flexDirection='row'>
		<Box p='5'>
		<Heading>Projects</Heading>
			{projects && integration?
			projects.map((project) => (
			<Text  key={Math.random} fontSize='2xl' borderBottom='1px' onClick={()=>getIntegration(project)}>{project}</Text> 
			))
			:
			<Spinner/>}
		</Box>
		<Box p='5'>
			<SimpleGrid columns={{ base: 1}} gap={{ base: '4'}}>
			{data?
				data.map((data) => (
					<Link key={Math.random()} to={`/integration/${data.name}`}>
						<AppCardIntegration 
						image={data.image} 
						name={data.name}
						status={data.status}
						price={data.price}
						description={data.description}
						type={data.type}
						connection={getConnection(data.name)}/>
					</Link>
				))
				:
				<Center>
					<Spinner/>
				</Center>}
			</SimpleGrid>
		</Box>
	</Box>
</Box>


  );
}


export default AppBarIntegration;
