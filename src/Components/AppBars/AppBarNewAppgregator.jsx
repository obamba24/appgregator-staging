import React, { useState } from 'react'
import { Box,Text, Spinner ,Heading,Badge,
	Button, Spacer, IconButton,SimpleGrid, ButtonGroup, Center, Input} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import {FiChevronsLeft,FiPlusCircle,FiMinusCircle} from "react-icons/fi";

	function AppBarNewAppgregator() {
		const [appCounter,setAppCounter] =useState(0);
		const [counterArr,setCounterArr]=useState();
		const navigate=useNavigate();

		const handleBox=(count)=>{
			let newArr=[]

			for (let index = 0; index < count; index++) {
				if(count-index!=1)
				newArr.push(
					<>
					<Box width='50%' height='25px' borderRight='1px'/>
					<Box p='5' width='full' bg='gray.50'  borderRadius='3xl'>
			<Center>
			<Button m='2' maxWidth='100' bg='#ffd600'>Add Apps</Button>
			</Center>
			</Box>
					</>
				)
				else
				newArr.push(
					<>
					<Box>
					<Box width='50%' height='25px' borderRight='1px'/>
						<Center>
						<IconButton marginBottom='-3' maxWidth='10' aria-label='Back' color='white' bg='tomato' icon={<FiMinusCircle />}onClick={()=>setAppCounter(appCounter-1)} />
						</Center>
					</Box>
					<Box p='5' width='full' bg='gray.50'  borderRadius='3xl'>
			<Center>
			<Button m='2' maxWidth='100' bg='#ffd600'>Add Apps</Button>
			</Center>
			</Box>
		</>
				)
			}
			return newArr;
		}
		
  return (
	<Box p={'5'} display='flex' flexDirection='column'>
		<Box m='5' >
		<ButtonGroup size='sm' isAttached variant='outline' onClick={() => navigate(-1)}>
						<IconButton aria-label='Back' icon={<FiChevronsLeft />} />
						<Button mr='-px'>Back</Button>
						</ButtonGroup>
			<Heading>New Appgregator</Heading>
		</Box>
		<Box m='2' alignSelf='center' display='flex' flexDirection='row'>
		<Input m='2' placeholder='Name your appgregator' maxWidth='lg'/>
		<Button m='2' bg='#ffd600'>Save</Button>

		</Box>
		
		<Box p='5' width='full' bg='gray.50' borderRadius='3xl'>
			<Center>
				<Button m='2' bg='#ffd600'>Add Apps</Button>
			</Center>
		</Box>
	
		{appCounter>0?	
		handleBox(appCounter)
		:
		<></>}

			<Box m='-3'>
				<Center>
					<IconButton aria-label='Back' bg='#ffd600' icon={<FiPlusCircle />}onClick={()=>setAppCounter(appCounter+1)} />
				</Center>
			</Box>
		</Box>
  )
}

export default AppBarNewAppgregator