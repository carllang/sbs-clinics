import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "./Atomic/Nav";

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Nav menuLinks={menuLinks} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
