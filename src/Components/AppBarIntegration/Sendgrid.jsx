import { Box,FormLabel,Text, Badge,Input, Button ,FormControl,FormHelperText} from '@chakra-ui/react'
import React, { useState } from 'react'

function Sendgrid() {
	const [email,setEmail]=useState();

	const handleSave=()=>{
		console.log(email)
	}
  return (
	<Box p='5' maxW='400px'>
		<Text paddingBottom='5'>Start sending email through our sendgrid integration. All you have to do is enter your from email address and we'll do the rest</Text>
		<Text paddingBottom='5'>Price : $0.002/email sent</Text>
		<FormControl paddingBottom='5'>
			<FormLabel htmlFor='email'>Email address <Badge colorScheme='cyan'>required</Badge></FormLabel>
			<Input maxW='300px' id='email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
			<FormHelperText>We'll never share your email.</FormHelperText>
		</FormControl>
		<Button bg='#ffd600' width='300px' onClick={()=>handleSave()}>Save</Button>
	</Box>
  )
}

export default Sendgrid