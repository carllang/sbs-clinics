import React from "react";
import PropTypes from "prop-types";
import Nav from "src/components/Nav";
import styled from "styled-components";
import { ImageGallery } from "src/components/Slick";
import Image from "src/components/image";

const NavContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;
  // background-color: #ffffff;
  opacity: 0.7;
  width: 100%;
  border-bottom: 1px solid #000000;

  @media all and (max-width: 768px) {
    opacity: 1;
    position: relative;
    border-bottom: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const Header = ({ menuLinks, page }) => {
  return (
    <>
      <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
      <label htmlFor="drawer-toggle" id="drawer-toggle-label" />
      <NavContainer id="drawer">
        <Nav menuLinks={menuLinks} />
      </NavContainer>
      {page === "home" ? (
        <div className="page-content">
          <ImageGallery
            images={[
              "toa-heftiba-644507-unsplash.jpg",
              "pacific.jpg",
              "worapong-kaewtong-553394-unsplash.jpg"
            ]}
          />
        </div>
      ) : (
        <Image
          image="martha-dominguez-de-gouveia-572635-unsplash.jpg"
          className="header-image"
        />
      )}
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
