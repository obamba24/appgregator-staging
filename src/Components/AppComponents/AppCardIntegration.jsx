import React from 'react'
import { Box, Button, Container, Image, Icon,
	Heading,Stack, Text, Spacer,useColorModeValue } from '@chakra-ui/react'
import { ArrowRightIcon} from '@chakra-ui/icons'

function AppCardIntegration() {
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
			<Box>
				<Image src='https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2'/>
			</Box>
			<Box>
				<Heading p='2' size='lg'>
					GMail
				</Heading>
			</Box>
			<Spacer/>
			<Box display='flex' flexDirection='row'>
				<Stack alignItems='center' p='2'>
					<Text fontWeight='bold' fontSize='larger'>8</Text>
					<Text >Connections</Text>
				</Stack>
				<Stack alignItems='center' p='2'>
					<Text fontWeight='bold' fontSize='larger'>3</Text>
					<Text>Appgregator</Text>
				</Stack>
			</Box>
			<Box paddingLeft='5'>
				<ArrowRightIcon/>
			</Box>
      </Box>
  </Box>
  )
}

export default AppCardIntegration