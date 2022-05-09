import {
	Box,
	Button,
	Circle,
	Heading,
	Img,
	LightMode,
	SimpleGrid,
	Stack, Flex, Center,useColorModeValue,Icon,
	Text,ButtonGroup,IconButton, Image,
	useColorModeValue as mode,
	VisuallyHidden, Container, useBreakpointValue,  Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,AspectRatio,
	ModalCloseButton,useDisclosure
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaPlay } from 'react-icons/fa'
import { AppCardPricing } from '../Components/AppComponents/AppCardPricing'
import { IoStatsChartOutline, IoStorefrontOutline } from 'react-icons/io5'
import { BsCart4 } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { AppCardCategory } from '../Components/AppComponents/AppCardCategory'
import { Link } from "react-router-dom";
import {auth} from "../Config/firebase"
import { useEffect } from 'react'
import { useState } from 'react'

  function HomePage() {
	const [email,setEmail]=useState('true');
	const { isOpen, onOpen, onClose } = useDisclosure()
	
	const getEmail=async()=>{
		setEmail(sessionStorage.getItem("Auth Token"))
		// console.log(sessionStorage.getItem("Auth Token"))
	}
	useEffect(() => {
		getEmail()
	  return () => {
		setEmail('')
	  }
	}, [])
	
	return (
		<>
	  <Box>
		<Box as="section" bg="#ffd600" color="black" py="7.5rem">
		  <Box
			maxW={{
			  base: 'xl',
			  md: '5xl',
			}}
			mx="auto"
			px={{
			  base: '6',
			  md: '8',
			}}
		  >
			<Box textAlign="center">
				<Center>
				<Image alignSelf='center' src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/85568cee-eea2-4b62-7a68-afa7f6a51b00/thumbnail' width='200px'/>
				</Center>
			  <Heading
			  marginTop='5'
				as="h1"
				size="3xl"
				fontWeight="extrabold"
				maxW="48rem"
				mx="auto"
				lineHeight="1.2"
				letterSpacing="tight"
			  >
				Get things done faster through our appgregator
			  </Heading>
			  <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
				Design and develop your automation to get higher results in productivity in seconds for developers and business owner.
			  </Text>
			</Box>
  
			<Stack
			  justify="center"
			  direction={{
				base: 'column',
				md: 'row',
			  }}
			  mt="10"
			  mb="20"
			  spacing="4"
			>
			  <LightMode>
				  {email? <>
					<Link to="/dashboard">
						<Button
						as="a"
						href="#"
						size="lg"
						colorScheme="blue"
						px="8"
						fontWeight="bold"
						fontSize="md"
						>
						Go To Dashboard
						</Button>
					</Link>
					</>
					:
					<>
						<Link to="/signup"><Button
						as="a"
						href="#"
						size="lg"
						colorScheme="blue"
						px="8"
						fontWeight="bold"
						fontSize="md"
						>
						Sign Up
						</Button>
						</Link>
						<Link to="/login">
						<Button
						as="a"
						href="#"
						size="lg"
						colorScheme="green"
						px="8"
						fontWeight="bold"
						fontSize="md"
						>
						Login
						</Button>
						</Link>
					</>
					}
			  </LightMode>
			</Stack>
  
			<Box
			  className="group"
			  cursor="pointer"
			  position="relative"
			  rounded="lg"
			  overflow="hidden"
			>
			  <Img
				alt="Screenshot of Envelope App"
				src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621085270/pro-website/app-screenshot-light_kit2sp.png"
			  />
			  <Circle
				size="20"
				as="button"
				bg="white"
				shadow="lg"
				color="white"
				position="absolute"
				top="50%"
				left="50%"
				transform="translate3d(-50%, -50%, 0)"
				fontSize="xl"
				transition="all 0.2s"
				_groupHover={{
				  transform: 'translate3d(-50%, -50%, 0) scale(1.05)',
				}}
			  >
				<VisuallyHidden>Play demo video</VisuallyHidden>
				<Button onClick={onOpen} bg='red'><FaPlay /></Button>

			  </Circle>
			</Box>
		  </Box>
		</Box>
  
		<Box as="section" py="24">
		  <Box
			maxW={{
			  base: 'xl',
			  md: '7xl',
			}}
			mx="auto"
			px={{
			  base: '6',
			  md: '8',
			}}
		  >
			<Text
			  fontWeight="bold"
			  fontSize="sm"
			  textAlign="center"
			  textTransform="uppercase"
			  letterSpacing="wide"
			  color={mode('gray.600', 'gray.400')}
			>
			  Trusted by over 6,000 blues
			</Text>
			<SimpleGrid
			  mt="8"
			  columns={{
				base: 1,
				md: 2,
				lg: 6,
			  }}
			  color="gray.500"
			  alignItems="center"
			  justifyItems="center"
			  spacing={{
				base: '12',
				lg: '24',
			  }}
			  fontSize="2xl"
			>
				
			 <Text>WEARING KLAMBY</Text>
			 <Text>IMPORTIR.ORG</Text>
			 <Text>QANTOR.CO.ID</Text>
			 <Text>LOGO HERE</Text>
			 <Text>LOGO HERE</Text>
			 <Text>LOGO HERE</Text>
			</SimpleGrid>
		  </Box>
		</Box>
		<Box
			background='#ffd600'
			mx="auto"
			px={{ base: '4', md: '8', lg: '12' }}
			py={{ base: '6', md: '8', lg: '12' }}
		>
			<Stack spacing={{ base: '6', md: '8', lg: '12' }}>
			<Flex
				justify="space-between"
				align={{ base: 'start', md: 'center' }}
				direction={{ base: 'column', md: 'row' }}
			>
				<Heading size="lg" mb={{ base: '3', md: '0' }}>
				Appgregator by Categories
				</Heading>
				
			</Flex>
			<SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: '4', md: '6', lg: '8' }}>
				{categories?categories.map((category) => (
				<AppCardCategory key={category.name} category={category} />
				)):<></>}
			</SimpleGrid>
			</Stack>
		</Box>

		<Box as="section" p='5'>
			<Stack >
				<Stack>
					<Center>
						<Stack spacing="3">
							<Text color="accent" fontWeight="semibold">
							Pricing
							</Text>
							<Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>
							Get lifetime access
							</Heading>

							<Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
								Get access to hundreds apps
							</Text>
						</Stack>
					</Center>
				</Stack>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap="8" rowGap="6">
				{products?products.map((product, id) => (
					<AppCardPricing key={id} product={product} />
				)):<></>}
				</SimpleGrid>
			</Stack>
		</Box>
		<Box bg="#ffd600" color="on-accent">
			<Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
			<Stack spacing={{ base: '4', md: '5' }}>
				<Stack justify="space-between" direction="row" align="center">
				{/* <Logo /> */}
				<ButtonGroup variant="ghost-on-accent">
					<IconButton
					as="a"
					href="#"
					aria-label="LinkedIn"
					icon={<FaLinkedin fontSize="1.25rem" />}
					/>
					<IconButton
					as="a"
					href="#"
					aria-label="GitHub"
					icon={<FaGithub fontSize="1.25rem" />}
					/>
					<IconButton
					as="a"
					href="#"
					aria-label="Twitter"
					icon={<FaTwitter fontSize="1.25rem" />}
					/>
				</ButtonGroup>
				</Stack>
				<Text fontSize="sm" color="on-accent-subtle">
				&copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
				</Text>
			</Stack>
			</Container>
		</Box>
	  </Box>
	  <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What is Appgregator?</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg='#ffd600' >
			  
		  	<AspectRatio ratio={16/9}>
			<iframe
				title='naruto'
				src='https://www.youtube.com/embed/QhBnZ6NPOY0?autoplay=1'
				allowFullScreen
				allow='autoplay'
			/>
			</AspectRatio>
			
          </ModalBody>

          
        </ModalContent>
      </Modal>
	  </>
	)
  }

	const products = [
	{
	  name: 'Free',
	  price: '$0',
	  icon: IoStatsChartOutline,
	  description: 'For new businesses',
	  features: ['100 tasks /mo','5 apps','15 minutes update time','Single step automation','1 user'],
	},
	{
	  name: 'Pro',
	  price: '$49',
	  icon: BsCart4,
	  description: 'For running businesses',
	  features: ['2000 tasks /mo', 'Unlimited apps','5 minutes update time','multi step automation','3 users','Webhooks'],
	},
	{
	  name: 'Corporate',
	  price: '$599',
	  icon: IoStorefrontOutline,
	  description: 'For impressive businesses',
	  features: ['100.000 tasks /mo', 'Unlimited apps','5 minutes update time','multi step automation','Unlimited users','Webhooks','Custom app'],
	},
  ]

  const categories = [
	{
	  name: 'Furniture',
	  imageUrl:
		'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	  url: '#',
	},
	{
	  name: 'Outdoor',
	  imageUrl:
		'https://images.unsplash.com/photo-1613317447829-eea2ed59640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
	  url: '#',
	},
	{
	  name: 'Beddings',
	  imageUrl:
		'https://images.unsplash.com/photo-1616627561950-9f746e330187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
	  url: '#',
	},
	{
	  name: 'Lighting',
	  imageUrl:
		'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
	  url: '#',
	},
	{
	  name: 'Cookware',
	  imageUrl:
		'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
	  url: '#',
	},
	{
	  name: 'Rugs',
	  imageUrl:
		'https://images.unsplash.com/photo-1600166898405-da9535204843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
	  url: '#',
	},
	{
	  name: 'Baby',
	  imageUrl:
		'https://images.unsplash.com/photo-1574175679797-9fc9eade1450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhYnklMjB0b3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	  url: '#',
	},
	{
	  name: 'Flooring',
	  imageUrl:
		'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
	  url: '#',
	},
  ]
  
  export default HomePage
