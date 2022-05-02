import { Box ,Image,Heading,Stack,Text,SimpleGrid, Badge, Spinner, Center} from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../Config/firebase"
import { Link } from 'react-router-dom';

function AppCardApps() {
	const [data,setData]=useState('')

	const getData= async ()=>{
		const docRef = doc(db, "appgregator_display", "app_list");
		const docSnap = await getDoc(docRef);
		
		if (docSnap.exists()) {
			const data = docSnap.data();
		  	console.log("Document data:", data.data);
		  	setData(data.data)
		} else {
		  console.log("No such document!");
		}
	}

	const AppList = ()=>{
		if(!data) return <Center><Spinner/></Center>
		return data.map((data) => (
			<Link key={Math.random()} to={`/integration/${data.name}`}>
			<Box  display='flex' flexDirection='row' alignItems='center'>
			<Image src={data.image} maxW='50px' border='1px'/>
			<Heading p='2' size='md'>{data.name}</Heading>
			{
			data.status!='Standart'?
				<Badge fontSize='xx-small' colorScheme='yellow'>{data.status}</Badge>
		   	:
		   	<></>
			}
			</Box>
			</Link>
		   ))
	}

	useEffect(() => {
		getData();
	  return () => {
		setData('')
	  }
	}, [])
	
  return (
	<Box>
		<SimpleGrid columns={{ base: 2}} 
		gap={{ base: '4'}}>

			<AppList/>
			
			
		</SimpleGrid>		
	</Box>
  )
}
const datsa=
[
	{
		id:1,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Standart'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail twitter kodok',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:2,
		image:'https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
	{
		id:3,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Comission'
	},
	{
		id:4,
		image:'https://zapier-images.imgix.net/storage/services/1afcb319c029ec5da10efb593b7159c8.png?auto=format&fit=crop&ixlib=react-9.3.1&q=50&w=20&h=20&dpr=2',
		title:'Gmail',
		status:'Premium'
	},
]

export default AppCardApps