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
        {isDesktop ? <Sidebar /> : null}
        <Box as="section" height="100vh" overflowY="auto" flex={1}>
          {/* <Navbar /> */}
          <Content />
        </Box>
      </Flex>
    );
  };

  return { AppLayout };
}

export default MainLayout;

{
  /* <Box as="section" height="100vh" overflowY="auto">
<Sidebar />
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
  {isDesktop ? (
    <>
      <Navbar />
      <Content />
    </>
  ) : (
    <>
      <Content />
    </>
  )}
</Flex>
</Box>  */
}
