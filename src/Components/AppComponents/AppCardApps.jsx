import { Box ,Image,Heading,Stack,Text,SimpleGrid, Badge} from '@chakra-ui/react'
import React from 'react'

function AppCardApps() {
  return (
	<Box>
		<SimpleGrid columns={{ base: 2}} 
		gap={{ base: '4'}}>

			{data.map((data) => (
			 <Box key={Math.random()} display='flex' flexDirection='row' alignItems='center'>
			 <Image src={data.image}/>
			 <Heading p='2' size='md'>{data.title}</Heading>
			 {data.status!='Standart'?
			 <Badge fontSize='xx-small' colorScheme='yellow'>{data.status}</Badge>
			:
			<></>}
		 </Box>
			))}
		</SimpleGrid>		
	</Box>
  )
}
const data=
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