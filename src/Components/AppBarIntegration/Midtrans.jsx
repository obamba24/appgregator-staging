import { Box,FormLabel, Input, Button ,FormControl,FormHelperText} from '@chakra-ui/react'
import React, { useState } from 'react'

function Midtrans() {
	const [email,setEmail]=useState();

	const handleSave=()=>{
		console.log(email)
	}
  return (
	<Box p='5'>
		<FormControl>
			<FormLabel htmlFor='email'>Email address</FormLabel>
			<Input maxW='300px' id='email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
			<FormHelperText>We'll never share your email.</FormHelperText>
		</FormControl>
		<Button bg='#ffd600' onClick={()=>handleSave()}>Save</Button>
	</Box>
  )
}

export default Midtrans