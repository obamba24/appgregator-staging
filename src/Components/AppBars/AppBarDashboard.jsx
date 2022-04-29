import * as React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiDownloadCloud } from "react-icons/fi";

function AppBarDashboard() {
  const Card = (props) => (
    <Box
      minH="3xs"
      bg="#ffd600"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      borderRadius="lg"
      {...props}
    />
  );
  return (
    <Container maxW="container.xl" py="8" flex="1">
      <Stack
        spacing={{
          base: "8",
          lg: "6",
        }}
      >
        <Stack
          spacing="4"
          direction={{
            base: "column",
            lg: "row",
          }}
          justify="space-between"
          align={{
            base: "start",
            lg: "center",
          }}
        >
          <Stack spacing="1">
            <Heading
              size={useBreakpointValue({
                base: "xs",
                lg: "sm",
              })}
              fontWeight="medium"
            >
              Dashboard
            </Heading>
            <Text color="muted">All important metrics at a glance</Text>
          </Stack>
          <HStack spacing="3">
            <Button
              variant="secondary"
              leftIcon={<FiDownloadCloud fontSize="1.25rem" />}
            >
              Download
            </Button>
            <Button variant="primary">Create</Button>
          </HStack>
        </Stack>
        <Stack
          spacing={{
            base: "5",
            lg: "6",
          }}
        >
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            gap="6"
          >
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Stack>
        <Card minH="sm" />
      </Stack>
    </Container>
  );
}

export default AppBarDashboard;
