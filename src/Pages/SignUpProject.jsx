import {
  Center,
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  useBreakpointValue,
  useColorModeValue,
  Stack,
  Heading,
  Container,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { setDoc, serverTimestamp, doc } from "firebase/firestore";
import { db, auth } from "../Config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Components/AppComponents/LogoComponent";

//belum ada validasi untuk cek nama project
function SignUpProject() {
  const [project, setProject] = useState("");
  const email = auth.currentUser.email;
  let navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const docRef = await setDoc(doc(db, "appgregator_projects", project), {
        projects: project,
		master:[email],
        user: [email],
      });
      console.log("Document written with ID: ", docRef);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Create your first project
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel>Project Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setProject(e.target.value)}
                />
              </FormControl>
              <Button onClick={() => handleRegister()}>Create Project</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default SignUpProject;
