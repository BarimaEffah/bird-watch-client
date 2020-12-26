import { Box } from "@chakra-ui/react";
import React from "react";

interface IInput {
  label: string;
}

const Input: React.FC<IInput> = ({ label }) => {
  return <Box>{label && <label htmlFor=""></label>}</Box>;
};
export default Input;
