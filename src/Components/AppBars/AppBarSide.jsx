import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import * as React from "react";
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
    >
      <Stack justify="space-between" spacing="1">
        <Stack
          spacing={{
            base: "5",
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
            <NavButton label="Home" icon={FiHome} />
            <NavButton
              label="Dashboard"
              icon={FiBarChart2}
              aria-current="page"
            />
            <NavButton label="Tasks" icon={FiCheckSquare} />
            <NavButton label="Bookmarks" icon={FiBookmark} />
            <NavButton label="Users" icon={FiUsers} />
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

            <NavButton
              onClick={() => handleLogOut()}
              label="Logout"
              icon={FiLogOut}
            />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};
