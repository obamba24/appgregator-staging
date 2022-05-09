import { Box } from "@chakra-ui/react";

function TwoLayout() {
  const LeftLayout = (Content) => {
    return (
      <Box flex="1" width={{ md: "30rem", xl: "40rem" }} overflowY="auto">
        <Content />
      </Box>
    );
  };
  const MainLayout = (Content) => {
    return (
      <Box width={{ md: "30rem", xl: "40rem" }} display="flex" overflowY="auto">
        <Content />
      </Box>
    );
  };

  return { LeftLayout, MainLayout };
}

export default TwoLayout;
