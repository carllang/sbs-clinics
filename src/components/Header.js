import React from "react";
import PropTypes from "prop-types";
import Nav from "src/components/Atomic/Nav";

import { ImageGallery } from "src/components/Slick";

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Nav menuLinks={menuLinks} />
    <ImageGallery
      images={[
        "pacific.jpg",
        "reinaldo-kevin-640696-unsplash.jpg",
        "samuel-zeller-110931-unsplash.jpg",
        "toa-heftiba-644507-unsplash",
        "worapong-kaewtong-553394-unsplash"
      ]}
    />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
