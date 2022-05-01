import React, { useState } from "react";
import {
	Box,
	Heading,
	SimpleGrid,useDisclosure,Button,
	Stack, Flex, Center,useColorModeValue,Icon,
	Text,ButtonGroup,IconButton, Image,
	useColorModeValue as mode,
	VisuallyHidden, Container, useBreakpointValue,Modal,Input,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
  } from '@chakra-ui/react'

import { AppCardCategory } from "../AppComponents/AppCardCategory";
import AppCardApps from "../AppComponents/AppCardApps";
import AppCardIntegration from "../AppComponents/AppCardIntegration"

function AppBarIntegration() {
	const [title,setTitle]=useState('');
	const { isOpen, onOpen, onClose } = useDisclosure()

  return (

	<Box
	mx="auto"
	px={{ base: '4', md: '8', lg: '12' }}
	py={{ base: '6', md: '8', lg: '12' }}
>
	<Flex 
		justify='space-between'
		align={{ base: 'start', md: 'center' }}
		direction={{ base: 'column', md: 'row' }}
	>
		<Heading size="lg" mb={{ base: '3', md: '0' }}>
		Appgregator integration
		</Heading>
		<Box alignSelf='center'>
			<Button
			size='md'
			height='48px'
			maxW='300px'
			width='300px'
			bg='yellow'
			onClick={onOpen}
			>
			Add Integration
			</Button>
		</Box>
	</Flex>
	<Box><Input placeholder='search' width ='300px' maxW='300'/></Box>
	<Box>
		<AppCardIntegration/>
		<AppCardIntegration/>
		<AppCardIntegration/>
		<AppCardIntegration/>
	</Box>
	<Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior='inside'
      >
		  <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Apps <Input placeholder='search App' m='2'/></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
			<AppCardApps/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>


  );
}

const categories = [
	{
	  name: 'Finance',
	  imageUrl:
		'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	  url: '#',
	  description:'this is a description of furniture'
	},
	{
	  name: 'Accounting',
	  imageUrl:
		'https://images.unsplash.com/photo-1613317447829-eea2ed59640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
	  url: '#',
	},
	{
	  name: 'e-commerce',
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

export default AppBarIntegration;
