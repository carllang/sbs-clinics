import React from "react";
import PropTypes from "prop-types";
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
