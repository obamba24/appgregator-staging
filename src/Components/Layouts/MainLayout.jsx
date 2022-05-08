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
      <Flex height='100vh'
      >
        {isDesktop ?
		<Box height="full"  overflowY="auto"  justifyContent="flex-end">
			<Sidebar />
		</Box> 
		: 
		null}
        <Box
          direction={{
            base: "row",
            lg: "column",
          }}
          bg="bg-canvas"
          flex="1"
		  overflowY="auto"
        >
          	<Navbar />
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
