import React from "react";
import { Helmet } from "react-helmet";

interface ICustomHeadProps {
  bgImage?: string | null;
}

const CustomHead: React.FC<ICustomHeadProps> = ({ bgImage }) => {
  return (
    <Helmet>
      <style>{`body{
      background-image:url(${bgImage}});
      background-color: #722CE6;
      background-size:cover;
      height:100vh;
      background-position:50% 50%;
      transition: all .300ms;
      repeat:no-repeat;
  }`}</style>
    </Helmet>
  );
};

export default CustomHead;
