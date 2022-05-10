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
import { setDoc, doc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../Config/firebase";
import { useNavigate } from "react-router-dom";

//belum ada validasi untuk cek nama project
function SignUpProject() {
  const [project, setProject] = useState("");
  let navigate = useNavigate();
  const email = auth.currentUser.email;

  const handleRegister = async () => {
    try {  
      const docRef = await setDoc(doc(db, "appgregator_projects", project), {
        projects: project,
		master:arrayUnion(email),
        user: arrayUnion(email),
		balance:0
      }, { merge: true });
	  console.log('email=',email)

	  const userRef = await setDoc(doc(db, "appgregator_user", email), {
        projects: arrayUnion(project)
      }, { merge: true });
      console.log("Document written with ID: ", docRef,userRef);
      navigate("/users", { replace: true });

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
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Create your project
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
