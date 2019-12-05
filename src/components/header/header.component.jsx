import React from "react";
import { HeaderComponent } from "./header.styles";

const Header = ({ title }) => {
  return (
    <HeaderComponent data-test="headerComponent">
      <h1>{title}</h1>
    </HeaderComponent>
  );
};

export default Header;
