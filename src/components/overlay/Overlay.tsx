import { Box } from "@chakra-ui/react";
import React from "react";

const Overlay: React.FC = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      bgColor="black"
      opacity={0.1}
      zIndex={-1}
      left="0"
      top="0"
      pointerEvents="none"
    ></Box>
  );
};

export default Overlay;
