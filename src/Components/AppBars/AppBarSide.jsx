import { Divider, Flex, Spacer, Stack, Button,
	Center,Progress } from "@chakra-ui/react";
import * as React from "react";
import {
  FiHelpCircle,
  FiHome,
  FiSettings,
  FiLogOut,
  FiRefreshCcw,
  FiZap,
  FiServer,FiUsers,FiKey
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { NavButton } from "../AppComponents/AppButtonNavBar";
import { Logo } from "../AppComponents/LogoComponent";
import { UserProfile } from "../AppComponents/UserProfile";

export const Sidebar = () => {
  let navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Flex
      flex="1"
      bg="#ffd600"
      color="on-accent"
      overflowY="auto"
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
          <Logo />
          
          <Spacer/>
		  	<Center>
			  <Button width='100%' bg='green' color='white'>New Appgregation</Button>
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

            <NavButton label="User" 
			icon={FiUsers} 
			onClick={() => navigate("/history")}/>

            <NavButton label="API key" 
			icon={FiKey} 
			onClick={() => navigate("/history")}/>

            <NavButton label="Billing" 
			icon={FiKey} 
			onClick={() => navigate("/history")}/>
          </Stack>
        </Stack>
        <Stack
          spacing={{
            base: "5",
            sm: "6",
          }}
        >
          <Stack spacing="1">
            <NavButton label="Help" icon={FiHelpCircle} />
            <NavButton label="Settings" icon={FiSettings} />
            <Progress value={2000} max={10000} />

			<Divider borderColor="bg-accent-subtle" />

			<UserProfile
            name="Christoph Winston"
            image="https://tinyurl.com/yhkm2ek8"
            email="chris@chakra-ui.com"
          />
            {/* <NavButton
              onClick={() => handleLogOut()}
              label="Logout"
              icon={FiLogOut}
            /> */}
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};
