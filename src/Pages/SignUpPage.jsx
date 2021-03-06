import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useNavigate } from "react-router-dom";

import { Logo } from "../Components/AppComponents/LogoComponent";
import { GoogleIcon } from "../Components/AppComponents/ProviderIconsApp";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  let navigate = useNavigate();

  const onHandleRegister = () => {
    if (password != confirmationPassword) {
      console.log("Password and confirmation is not match");
      return "";
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        // console.log(sessionStorage.getItem('Auth Token'))
      })
      .then(() => navigate("/project", { replace: true }))
      .catch((error) => alert(error.message));
  };

  return (
    <Container maxW="md" py={{ base: "12", md: "24" }}>
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing="3" textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Create an account
            </Heading>
            <Text color="muted">Start making your dreams come true</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText color="muted">
                At least 8 characters long
              </FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <Input
                id="password"
                type="password"
                onChange={(e) => setConfirmationPassword(e.target.value)}
              />
              <FormHelperText color="muted">
                At least 8 characters long
              </FormHelperText>
            </FormControl>
          </Stack>
          <Stack spacing="4">
            <Button variant="primary" onClick={() => onHandleRegister()}>
              Create account
            </Button>
            <Button
              variant="secondary"
              leftIcon={<GoogleIcon boxSize="5" />}
              iconSpacing="3"
            >
              Sign up with Google
            </Button>
          </Stack>
        </Stack>
        <HStack justify="center" spacing="1">
          <Text fontSize="sm" color="muted">
            Already have an account?
          </Text>
          <Button variant="link" colorScheme="blue" size="sm">
            Log in
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}

export default SignUpPage;
