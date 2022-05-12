import React, { useEffect,useState } from 'react'
import { Box,Button,Center,Text } from '@chakra-ui/react';


function Facebook() {
	const [authResponse,setAuthResponse]=useState();
	
	const FB = window.FB;
	window.fbAsyncInit = function() {
		console.log('in fb async')
	FB.init({
		appId            : '1192427458168904',
		autoLogAppEvents : true,
		xfbml            : true,
		version          : 'v13.0'
	});
	};

	const checkLogin=()=>{
		console.log('in check login')
		//get connection from DB
		FB.getLoginStatus(function(response) {
			setAuthResponse(response);
			console.log('status lognin',response)
		});
	}

	const FBLogin=()=>{
	FB.login(function(response){
		if (response.status === 'connected') {
			console.log(response,'ini response nya')
			//send data to DB
			setAuthResponse(response)
			} else {
			setAuthResponse()
			}
		}, {scope: 'public_profile,user_photos,email,instagram_basic,pages_show_list'});
	}

	const FBLogout=()=>{
	FB.logout(function(response) {
		//remove all connection from db
		setAuthResponse()
		});
	}
//docs basic
//https://developers.facebook.com/docs/instagram-api/getting-started

//connect with FB
//https://graph.facebook.com/v13.0/me/accounts?access_token=EAAQ8gacQiEgBAP8Xwnqmt6CGRLxXVJOUZAgCihaZBZCOMgJO0UOUHVDh0uXAT2YiDsQOZBXuX8lWEjxzJHU6miZCJ5ZCB4gZBGV7KZCWNsD51t77KsGJZBU2mfO51eZAo1E5Mkq5An9oLbiWD27X2PFmlviGx5F29B9tM7dgPJtnJcFEzKfgh9QUh1

//get Connected IDs
// https://graph.facebook.com/v13.0/778660048929731?fields=instagram_business_account&access_token=EAAQ8gacQiEgBAP8Xwnqmt6CGRLxXVJOUZAgCihaZBZCOMgJO0UOUHVDh0uXAT2YiDsQOZBXuX8lWEjxzJHU6miZCJ5ZCB4gZBGV7KZCWNsD51t77KsGJZBU2mfO51eZAo1E5Mkq5An9oLbiWD27X2PFmlviGx5F29B9tM7dgPJtnJcFEzKfgh9QUh1


useEffect(() => {
	checkLogin();
  return () => {
	setAuthResponse();
  }
}, [])

  return (
	<Box m='2'>
		<Box>
			<Center>
			{!authResponse?<>
			<Text>Kodok</Text>
			<Button onClick={()=>FBLogout()} bg="#ffd600">Disconnect from Facebook</Button>
			</>
			:
			<Button onClick={()=>FBLogin()} bg="#ffd600">Connect to Facebook</Button>
			}
			</Center>
		</Box>
		
	</Box>
  )
  
}

export default Facebook