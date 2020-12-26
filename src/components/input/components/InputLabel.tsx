import React from "react";

const InputLabel: React.FC = ({ children }) => {
  return (
    <label style={{ display: "block", marginBottom: "8px" }} htmlFor="">
      {children}
    </label>
  );
};

export default InputLabel;
