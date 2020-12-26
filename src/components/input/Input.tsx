import { Box, Input as ChakraInput } from "@chakra-ui/react";
import React from "react";
import InputLabel from "./components/InputLabel";

interface IInput {
  label?: string;
}

const Input: React.FC<IInput> = ({ label }) => {
  return (
    <Box>
      {label && <InputLabel>{label}</InputLabel>}
      <ChakraInput></ChakraInput>
    </Box>
  );
};
export default Input;
