import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,Image,
} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";

import { FiPlusCircle } from "react-icons/fi";
import { Logo } from "../AppComponents/LogoComponent";
import { Sidebar } from "./AppBarSide";
import { ToggleButton } from "../AppComponents/ToogleButton";
import { signOut } from "firebase/auth";
import { auth, db } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, where } from "firebase/firestore";
import { get } from "store";
import { useState } from "react";

export const Navbar = () => {
  var store = require("store");
  const userEmail = auth.currentUser.email;
  const [projectSelector, setProjectSelector] = useState([]);

  const isDesktop = useBreakpointValue({
    lg: true,
    md: false,
  });
  let navigate = useNavigate();

  const { isOpen, onToggle, onClose } = useDisclosure();

  const getProject = () => {
    const docRef = collection(
      db,
      "projects",
      where("user", "array-contains", userEmail),
      get()
    );
    console.log(docRef);
    setProjectSelector(docRef.data);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        navigate("/", { replace: true });
        store.remove("Project");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Box as="nav" bg="#ffd600" color="on-accent" shadow="sm">
      <Container maxW="800px" p="2">
        <Flex justify="space-between">
          <HStack spacing="4">
            {isDesktop ? null : <Image src='https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/85568cee-eea2-4b62-7a68-afa7f6a51b00/thumbnail' width='200px'/>}
            {/* <Logo /> */}
            {/* {isDesktop && (
              <ButtonGroup variant="ghost-on-accent" spacing="1">
                <Button>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button>
                  <Link to="/products">Products</Link>
                </Button>
                <Button>
                  <Link to="/orders">Orders</Link>
                </Button>
              </ButtonGroup>
            )} */}
          </HStack>
          {isDesktop ? (
			  <></>
            // <HStack spacing="4">
            //   {/* <ButtonGroup variant="ghost-on-accent" spacing="1">
            //     <Link to="/products/new">
            //       <IconButton
            //         icon={<FiPlusCircle fontSize="1.25rem" />}
            //         aria-label="Add Product"
            //       />
            //     </Link>
            //   </ButtonGroup> */}
            //   {/* <Select variant="outline" placeholder={store.get("Project")}>
            //     {projectSelector.map((project) => (
            //       <option value={project.projects}>{project.projects}</option>
            //     ))}
            //   </Select> */}
            //   <Menu>
            //     <MenuButton as={Avatar}></MenuButton>
            //     <MenuList>
            //       {/* <MenuItem onClick={() => navigate("/setting")}>
            //         Setting
            //       </MenuItem> */}
            //       <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
            //     </MenuList>
            //   </Menu>
            // </HStack>
          ) : (
            <>
              <ToggleButton
                isOpen={isOpen}
                aria-label="Open Menu"
                onClick={onToggle}
              />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
