import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";
import Nav from "src/components/Nav";
import "./nav.css";

const FooterWrapper = styled.div`
  // border-top: 1px solid #999999;
  display: flex;
  justify-content: space-between;
`;

const Footer = ({ siteTitle, menuLinks }) => {
  return (
    <LayoutContainer>
      <FooterWrapper>
        {siteTitle} <Nav menuLinks={menuLinks} colour="black" />
      </FooterWrapper>
    </LayoutContainer>
  );
};

export default Footer;
