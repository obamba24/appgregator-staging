import React,{useState,useEffect} from 'react'
import { Text,Box, Spinner ,Heading,Badge,
	 Button, Spacer, Input,SimpleGrid, useDisclosure,Center,Modal,
	 ModalOverlay,
	 ModalContent,
	 ModalHeader,
	 ModalFooter,
	 ModalBody,Image,
	 ModalCloseButton,Accordion, List,
	 ListItem,
	 ListIcon,
	 OrderedList,
	 UnorderedList,
	 AccordionItem,
	 AccordionButton,
	 AccordionPanel,
	 AccordionIcon,} from '@chakra-ui/react';

import { doc,query, getDoc,setDoc ,getDocs,limit,orderBy,collection} from "firebase/firestore";
import {db,auth,app} from "../../Config/firebase"
import AppCardIntegration from '../AppComponents/AppCardIntegration';
import { CheckCircleIcon } from '@chakra-ui/icons'


function AppBarBilling() {
	const [projects,setProjects]=useState();
	const [viewProject,setViewProject]=useState();
	const [loadCheckout,setLoadCheckout]=useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()

	const currentUser=auth.currentUser;
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

	const handleDeposit=async(data)=>{
		const time = Math.floor(Date.now() / 1000)
		setLoadCheckout(true)
		try{
			const checkoutRef = await setDoc(doc(db, `customers/${currentUser.uid}/checkout_sessions/`, time.toString()), {
				mode: "payment",
				price: data, // One-time price created in Stripe
				success_url: window.location.origin,
				cancel_url: window.location.origin,
				time:time.toString()
			  });

				setTimeout(() => {
					console.log("checkoutref success, executing function")
					const q = query(collection(db, 
						`customers/${currentUser.uid}/checkout_sessions/`), 
						orderBy("time", "desc"), limit(1));
					getDocs(q)
					.then(apiSnap=>
						apiSnap.forEach((doc) => {
						console.log(doc.id, " => ", doc.data());
						window.location.assign(doc.data().url);
					})
					);
					setLoadCheckout(false)
				}, 5000);
			

  
}
catch(error){
	console.log(error.message)
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
	<Text key={Math.random()} fontSize='2xl' borderBottom='1px' onClick={()=>handleProject(project)}>{project}</Text> 
	))
	:
	<Spinner/>}
	
	</Box>
	<Box p='5' borderLeft='1px' width='100%'>
		<Box display='flex' flexDirection='row' >
			<Heading>Billing - {viewProject}</Heading>
			<Spacer/>
			<Button
          onClick={() => onOpen()}
          m={4}
		  bg='#ffd600'
        >Add Deposit</Button>
			
		</Box>
		<Box p='5' borderRadius='5'>
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

<Modal onClose={onClose} size='xl' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
		  <Accordion>
			<AccordionItem>
				<h2>
				<AccordionButton>
					<Box flex='1' textAlign='left'>
					<Image src='https://seeklogo.com/images/S/stripe-logo-4039DEE4FE-seeklogo.com.jpg' width='25px'/>
					<Text>Stripe - Credit Card</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				</h2>
				<AccordionPanel pb={4} defaultIndex={[0]}>
				<Box display='flex' flexDirection='row' width='100%'>
					<Box width='50%'>
						<Heading>Basic</Heading>
						<Heading size='lg'>$200</Heading>
						<Text>/month</Text>
							<List marginTop='2' spacing={1}>
								<ListItem>
									<ListIcon as={CheckCircleIcon} color='green.500' />
									Email Integration						
									</ListItem>
								<ListItem>
									<ListIcon as={CheckCircleIcon} color='green.500' />
									Finance Integration
								</ListItem>
								<ListItem>
									<ListIcon as={CheckCircleIcon} color='green.500' />
									Accounting Integration
								</ListItem>
								<ListItem>
									<ListIcon as={CheckCircleIcon} color='green.500' />
									Payment Integration
								</ListItem>
								<ListItem>
									<ListIcon as={CheckCircleIcon} color='green.500' />
									Up to 100k api Calls
								</ListItem>
								</List>
								<Center>
								{!loadCheckout?
								<Button marginTop='2' bg='#ffd600' width='80%' onClick={()=>handleDeposit('price_1KwrIuGrPQAlpFPytjwJTqTh')}>Buy</Button>
								:
								<Button
								m='2' p='5' bg='#ffd600'
								isLoading
								width='80%'
								loadingText='Loading'
								colorScheme='teal'
								variant='outline'
								spinnerPlacement='start'
							/>}
							</Center>
								</Box>
					<Spacer />
					<Box width='50%'>
						<Heading>Premium</Heading>
						<Heading size='lg'>$500</Heading>
						<Text>/month</Text>
						<List marginTop='2' spacing={1}>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								All basic integration							
								</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								E-Commerce Integration
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Notification Integration
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Storage Integration
							</ListItem>
							<ListItem>
								<ListIcon as={CheckCircleIcon} color='green.500' />
								Up to 250k api Calls
							</ListItem>
							</List>
							<Center>
							{!loadCheckout?
							<Button marginTop='2' bg='#ffd600' width='80%' onClick={()=>handleDeposit('app-premium')}>Buy</Button>
							:
							<Button
								m='2' p='5' bg='#ffd600'
								isLoading
								width='80%'
								loadingText='Loading'
								colorScheme='teal'
								variant='outline'
								spinnerPlacement='start'
							/>}
							</Center>

					</Box>
					
				</Box>
				</AccordionPanel>
			</AccordionItem>

			{/* <AccordionItem>
				<h2>
				<AccordionButton>
					<Box flex='1' textAlign='left'>
					Section 2 title
					</Box>
					<AccordionIcon />
				</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
				</AccordionPanel>
			</AccordionItem> */}
			</Accordion>
			{loadCheckout?<Center><Text>Please wait until page is reloaded</Text></Center>:<></>}
          </ModalBody>
         
        </ModalContent>
      </Modal>
	</>
	
  )
}

export default AppBarBilling