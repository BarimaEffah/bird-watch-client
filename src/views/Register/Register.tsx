import { Grid, Input } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { Helmet } from "react-helmet";

const Register: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = React.useState("");

  //refactor into a utility call
  //something like unsplash.getRandom() || unsplash.getImage(imageId)
  React.useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random/?client_id=_yKtDWa3kPKndiXlccI4fBiOGySj09dbjQAxX63c92E&collections=1103088,1708734,3694365,219941,4994801,494263&orientation=landscape"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBackgroundImage(res.urls.regular);
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
        <style>{`body{background-image:url(${backgroundImage}});background-size:cover;height:100vh;background-position:50% 50%;}`}</style>
      </Helmet>
      <Grid>
        <Input></Input>
      </Grid>
    </React.Fragment>
  );
};

export default Register;
