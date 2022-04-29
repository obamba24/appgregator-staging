import { Divider, Flex, Spacer, Stack, Progress } from "@chakra-ui/react";
import * as React from "react";
import {
  FiHelpCircle,
  FiHome,
  FiSettings,
  FiLogOut,
  FiRefreshCcw,
  FiZap,
  FiServer,
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
          <Spacer />
          <UserProfile
            name="Christoph Winston"
            image="https://tinyurl.com/yhkm2ek8"
            email="chris@chakra-ui.com"
          />
          <Divider borderColor="bg-accent-subtle" />
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
            <NavButton label="Zaps" icon={FiZap} />
            <NavButton label="Zaps History" icon={FiRefreshCcw} />
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
