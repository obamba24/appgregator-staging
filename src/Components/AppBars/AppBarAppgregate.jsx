import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import AppCardApps from '../AppComponents/AppCardApps'

function AppBarAppgregate() {
	const [app,setApp]=useState('')
	const [step1,setStep1]=useState(true)
	const [step2,setStep2]=useState(false)
	const [step3,setStep3]=useState(false)
	const [step4,setStep4]=useState(false)

	const handleStep=(data)=>{
		console.log('handle Step')
	}

  return (
	<Box alignItems='center'>
		<Text onClick={()=>handleStep('kodok')}>Untitled Appgregator</Text>
		{/* <AppCardApps/> */}
	</Box>
  )
}

export default AppBarAppgregate