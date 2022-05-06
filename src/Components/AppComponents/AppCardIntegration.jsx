import React from 'react'
import { Box, Button,Center, Container, Image, Icon,
	Heading,Stack, Text, Spacer,useColorModeValue, Badge } from '@chakra-ui/react'
import { ArrowRightIcon,CheckIcon} from '@chakra-ui/icons'
import { useParams } from 'react-router-dom'

function AppCardIntegration(props) {

  return (
	<Box as="section">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
		bg='gray.50'
        p='5'
		display='flex' flexDirection='row' alignItems='center'
      >
		  
			<Box p='2'>
				<Image src={props.image} width='75px' maxWidth='100px' fallbackSrc='https://via.placeholder.com/25'/>
			</Box>
			<Box p='2'>
			<Heading size='lg'>
					{props.name}
				</Heading>
				<Text>{props.description}</Text>
				<Badge colorScheme='blue'>{props.status}</Badge>{' '}<Badge colorScheme='green'>{props.type}</Badge>{' '}<Text paddingLeft='2'>${props.price}/ API call</Text>
			</Box> 
			<Spacer/>
			<Box display='flex' flexDirection='row'>
				
				<Stack alignItems='center' p='2'>
					<Text fontWeight='bold' fontSize='larger'>{props.connection}</Text>
					<Text>Connection</Text>
				</Stack>
			</Box>
			<Box paddingLeft='2'>
			
				<ArrowRightIcon/>
			</Box>
      </Box>
  </Box>
  )
}

export default AppCardIntegration