import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import CustomHead from "src/components/customHead/CustomHead";
import useUnsplash from "src/hooks/useUnsplash";
import logo from "src/assets/img/logo.svg";
import Input from "src/components/input/Input";
import Overlay from "src/components/overlay/Overlay";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const img = useUnsplash({ fetchNewAlways: false });

  return (
    <React.Fragment>
      <CustomHead bgImage={img.random}></CustomHead>
      <Overlay></Overlay>
      <Flex px={8} py={12}>
        <Image width={70} src={logo}></Image>
      </Flex>

      <Grid px={8} gridTemplateColumns="repeat(3,1fr)">
        <Box padding="16px" bgColor="transparent" borderRadius="8px">
          <Stack>
            <Stack width="100%" isInline>
              <Input label="First name"></Input>
              <Input label="Last name"></Input>
            </Stack>
            <Input label="Email address"></Input>
            <Input label="Password"></Input>
            <Button>Sign up</Button>
            <p>
              Already got an account? <Link to="/">Log in</Link>
            </p>
          </Stack>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Register;
