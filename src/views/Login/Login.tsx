import { Box, Button, Flex, Grid, Image, Input, Stack } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/img/logo.svg";
import CustomHead from "src/components/customHead/CustomHead";
import useUnsplash from "src/hooks/useUnsplash";

const Login: React.FC = () => {
  const img = useUnsplash();

  const filterStyles: CSSProperties = {
    height: "100vh",
    width: "100vw",
    position: "fixed",
  };

  return (
    <React.Fragment>
      <div style={filterStyles} className="filter"></div>
      <CustomHead bgImage={img.random}></CustomHead>
      <Flex px={12} py={8} alignItems="center" justifyContent="space-between">
        <Image width={70} src={logo}></Image>
        <Stack isInline spacing="12px">
          <Input
            fontSize="14px"
            size="sm"
            placeholder="Email, username"
            _placeholder={{ color: "white" }}
            borderColor="white"
            width="auto"
          ></Input>
          <Input
            fontSize="14px"
            size="sm"
            placeholder="Email, username"
            _placeholder={{ color: "white" }}
            borderColor="white"
            width="auto"
          ></Input>
          <Button size="sm">Log in</Button>
        </Stack>
      </Flex>
      <Grid px={12} gridTemplateColumns="repeat(3,1fr)" gap={8}>
        <Flex height="calc(100vh - 100px)" alignItems="center">
          <Stack spacing="16px">
            <Box as="h5" color="white">
              Join avery today
            </Box>
            <Box fontSize="28px" color="white" as="h1">
              See what’s happening in the world right now
            </Box>
            <Link to="/register">
              <Button size="md" width="50%">
                Sign up
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
