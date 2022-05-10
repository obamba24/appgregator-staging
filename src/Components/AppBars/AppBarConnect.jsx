import { Box, ButtonGroup,Button,IconButton,Center, Heading, Image, Input, Spinner, Text } from '@chakra-ui/react';
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {FiChevronsLeft} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


import Sendgrid from '../AppBarIntegration/Sendgrid';
import Midtrans from '../AppBarIntegration/Midtrans';
import Facebook from '../AppBarIntegration/Facebook'

function AppBarConnect() {
	const param = useParams();
	const navigate = useNavigate();


	const AppRegister =()=>{
		if (!param.platform) return <Spinner/>
		if(param.platform=='sendgrid') return <Sendgrid/>;
		if(param.platform=='midtrans') return <Midtrans/>;
		if(param.platform=='facebook') return <Facebook/>;

		return <Text>There is no such integration</Text>
	}

  return (
	  <Box>
		  <Center>
			  <Box>
				<Box p='2'>
					<Box>
						<ButtonGroup size='sm' isAttached variant='outline' onClick={() => navigate(-1)}>
						<IconButton aria-label='Back' icon={<FiChevronsLeft />} />
						<Button mr='-px'>Back</Button>
						</ButtonGroup>
					</Box>
					<Box paddingLeft='2'>
						<Heading>Connect to {param.platform}</Heading>
					</Box>
				</Box>
				<Box>
					<AppRegister/>
				</Box>
			</Box>
			</Center>
	  </Box>
	  
  )
}

export default AppBarConnect