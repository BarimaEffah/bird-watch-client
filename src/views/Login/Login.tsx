import { Box, Button, Flex, Grid, Image, Input, Stack } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { Helmet } from "react-helmet";
import { unsplash } from "src";
import logo from "src/assets/img/logo.svg";

const Register: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = React.useState<null | string>(
    ""
  );
  React.useEffect(() => {
    if (localStorage.getItem("bgImage")) {
      setBackgroundImage(localStorage.getItem("bgImage"));
      return;
    }
    unsplash
      .getNewRandomImage()
      .then((img) => setBackgroundImage(img))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filterStyles: CSSProperties = {
    height: "100vh",
    width: "100vw",
    position: "fixed",
  };

  return (
    <React.Fragment>
      <div style={filterStyles} className="filter"></div>
      <Helmet>
        <style>{`body{
            background-image:url(${backgroundImage}});
            background-color: #722CE6;
            background-size:cover;
            height:100vh;
            background-position:50% 50%;
            transition: all .300ms
        }`}</style>
      </Helmet>
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
            <Button size="md" width="50%">
              Sign up
            </Button>
          </Stack>
        </Flex>
      </Grid>
    </React.Fragment>
  );
};

export default Register;
