import {
  Box,
  Container,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Navbar } from "../AppBars/AppBarNavigation";
import { Sidebar } from "../AppBars/AppBarSide";

function MainLayout() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const AppLayout = (Content) => {
    return (
      <Flex
        as="section"
        direction={{
          base: "column",
          lg: "row",
        }}
        height="100vh"
        bg="bg-canvas"
        overflowY="auto"
      >
        {isDesktop ? <Sidebar /> : <Navbar />}
        <Content />
      </Flex>
    );
  };

  return { AppLayout };
}

export default MainLayout;
