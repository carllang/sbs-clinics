import React from "react";
import PropTypes from "prop-types";
import Nav from "src/components/Nav";

import { ImageGallery } from "src/components/Slick";

const Header = ({ siteTitle, menuLinks }) => <Nav menuLinks={menuLinks} />;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
