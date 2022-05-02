import React from 'react'
import { Box, Button,Center, Container, Image, Icon,
	Heading,Stack, Text, Spacer,useColorModeValue, Badge } from '@chakra-ui/react'
import { ArrowRightIcon,CheckIcon} from '@chakra-ui/icons'
import { useParams } from 'react-router-dom'

function AppCardIntegration(props) {

  return (
	<Box as="section" py={{ base: '2', md: '2' }}>
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
		bg='gray.50'
        p={{ base: '4', md: '6' }}
		display='flex' flexDirection='row' alignItems='center'
      >
		  <Box alignContent='center' bg='green' p='2' borderRadius='50px'>
			  <Text fontSize='smaller' color='white'>Live</Text>
		  </Box>
			<Box paddingLeft='2'>
				<Image src={props.image} width='50px' border='1px' borderColor='#ffd600' fallbackSrc='https://via.placeholder.com/25'/>
				
			</Box>
			<Box>
				<Heading paddingLeft='2' size='lg'>
					{props.name}
				</Heading>
				<Text paddingLeft='2'>${props.price}/ API call</Text>
				
			</Box>
			<Spacer/>
			<Box display='flex' flexDirection='row'>
				
				<Stack alignItems='center' p='2'>
					<Text fontWeight='bold' fontSize='larger'>{props.connection}</Text>
					<Text>Connection</Text>
				</Stack>
			</Box>
			<Box paddingLeft='2'>
			<Badge colorScheme='blue'>{props.status}</Badge>
				{/* <ArrowRightIcon/> */}
			</Box>
      </Box>
  </Box>
  )
}

export default AppCardIntegration