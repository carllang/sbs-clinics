import React from "react";
import PropTypes from "prop-types";
import Nav from "src/components/Nav";
import styled from "styled-components";
import { ImageGallery } from "src/components/Slick";
import { Image } from "src/components/Image";

const NavContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 9;
  background-color: #000000;
  opacity: 1;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  color: #ffffff;
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
              {
                src: "nastuh-abootalebi-284877-unsplash.jpg",
                title: "Title 1"
              },
              {
                src: "samuel-zeller-110931-unsplash.jpg",
                title: "Title 2"
              },
              {
                src: "christopher-burns-368617-unsplash.jpg",
                title: "Title 3"
              },
              {
                src: "daniel-frank-201417-unsplash.jpg",
                title: "Title 4"
              }
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

export { Header };
