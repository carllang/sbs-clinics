import React from "react";
import PropTypes from "prop-types";
import Nav from "./Atomic/Nav";
import Image from "./image";

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Nav menuLinks={menuLinks} />
    <Image image="pacific.jpg" />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
