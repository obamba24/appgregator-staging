import { Divider, Flex,Text, Spacer, Stack, Button,
	Center,Progress,Image } from "@chakra-ui/react";
import React, {useEffect,useState} from "react";
import {
  FiHelpCircle,
  FiHome,
  FiSettings,
  FiLogOut,
  FiRefreshCcw,
  FiZap,
  FiServer,FiUsers,FiDollarSign
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { NavButton } from "../AppComponents/AppButtonNavBar";
import { UserProfile } from "../AppComponents/UserProfile";

export const Sidebar = () => {
	const [email,setEmail]=useState();
  let navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const getEmail=async ()=>{
	await setEmail(auth.currentUser.email)
  }

  useEffect(() => {
	getEmail()
	return () => {
	  
	}
  }, [])
  


  return (
    <Flex
      flex="1"
      bg="#ffd600"
      color="on-accent"
      overflowY="auto"
	  height="full"  
	  justifyContent="flex-end"
      maxW={{
        base: "full",
        sm: "xs",
      }}
      py={{
        base: "6",
        sm: "8",
      }}
      px={{
        base: "4",
        sm: "6",
      }}
      shadow="xl"
    >
      <Stack justify="space-between" spacing="1">
        <Stack
          spacing={{
            sm: "6",
          }}
          shouldWrapChildren
        >
          <Image src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/85568cee-eea2-4b62-7a68-afa7f6a51b00/thumbnail'/>
          
          <Spacer/>
		  	<Center>
				<Link to='/appgregate/new'>
			  		<Button width='100%' bg='green' color='white'>New Appgregator</Button>
			  	</Link>
			</Center>
          <Stack spacing="1">
            {/* <NavButton label="Home" icon={FiHome} /> */}
            <NavButton
              label="Dashboard"
              icon={FiHome}
              aria-current="page"
              onClick={() => navigate("/dashboard")}
            />
            <NavButton
              label="Integration"
              icon={FiServer}
              onClick={() => navigate("/integration")}
            />
            <NavButton label="Appgeregate" 
			icon={FiZap} 
			onClick={() => navigate("/appgregate")}
			/>

			<NavButton label="Appgregate History" 
			icon={FiRefreshCcw} 
			onClick={() => navigate("/history")}/>

            <NavButton label="Users, Projects & API" 
			icon={FiUsers} 
			onClick={() => navigate("/users")}/>

            <NavButton label="Billing" 
			icon={FiDollarSign} 
			onClick={() => navigate("/billing")}/>
          </Stack>
        </Stack>
        <Stack
          spacing={{
            base: "5",
            sm: "6",
          }}
        >
          <Stack spacing="1">
            <NavButton label="API docs" icon={FiHelpCircle} />
            <NavButton label="Settings" icon={FiSettings} onClick={() => navigate("/setting")}/>
            <NavButton
              onClick={() => handleLogOut()} label="Logout" icon={FiLogOut}
            />
			<UserProfile
            image="https://tinyurl.com/yhkm2ek8"
            email={email}
          />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};
