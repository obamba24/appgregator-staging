import { Box,Button, Input,Tabs, FormLabel,FormControl,Text,TabList, TabPanels, Tab, TabPanel, Heading, Center} from '@chakra-ui/react'
import React from 'react'
import { getAuth, updatePassword } from "firebase/auth";
import { useState,useEffect } from 'react';

function AppBarSetting() {
	const [newPassword,setNewPassword]=useState('');
	const [confirmNewPassword,setConfirmNewPassword]=useState('');
	const [success,setSuccress]=useState(false);

	const auth = getAuth();
	const user = auth.currentUser;

	const handlePassword1=(data)=>{
		setNewPassword(data)
	}
	const handlePassword2=(data)=>{
		setConfirmNewPassword(data)
	}

const handleUpdatePassword=()=>{
	if(newPassword===confirmNewPassword)
		updatePassword(user, newPassword).then(() => {
		setSuccress(true)
	}).catch((error) => {
		console.log(error)
	});
	
}

	// const Password=()=>{
	// 	return(
			
	// 	)
	// };

  return (
	  <Box>
		<Center>
		<Box p='5' width='300px'>
		<Heading p='2'>Setting</Heading>
			<Box width='300px'>
			<Box>
				{success?<Text>Pasword succesfuly changed</Text>:<></>}
				<Heading size='md'>Change password</Heading>
				<FormControl>
					<FormLabel htmlFor='password'>New password</FormLabel>
					<Input id='password' type='password' onChange={e=>setNewPassword(e.target.value) }/>
				</FormControl>
				<FormControl>
				<FormLabel htmlFor='password'>Confirm new password</FormLabel>
					<Input id='password' type='password' onChange={(e)=>handlePassword2(e.target.value) }/>
				</FormControl>
				<Button m='2' onClick={()=>handleUpdatePassword()}>Save</Button>
			</Box>
			</Box>
		</Box>
		</Center>
	  </Box>
  )
}

export default AppBarSetting