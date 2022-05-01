import { Box, Center, Heading, Image, Input, Spinner, Text } from '@chakra-ui/react';
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

import Sendgrid from '../AppBarIntegration/Sendgrid';
import Midtrans from '../AppBarIntegration/Midtrans';

function AppBarConnect() {
	const param = useParams();

	const AppRegister =()=>{
		if (!param.platform) return <Spinner/>
		if(param.platform=='sendgrid') return <Sendgrid/>;
		if(param.platform=='midtrans') return <Midtrans/>;

		return <Text>There is no such integration</Text>
	}

  return (
	  <Box>
		  <Center>
			  <Box>
				<Box p='2'>
					<Heading>Connect to {param.platform}</Heading>
					<Image src='' />
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