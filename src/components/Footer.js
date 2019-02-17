import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";
import Nav from "src/components/Nav";
import "./nav.css";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 0.9em;
    color: #666666;
  }
  .footer-title {
    font-size: 0.7em;
    color: #666666;
  }
`;

const Footer = ({ siteTitle, menuLinks }) => {
  return (
    <div style={{ borderTop: "1px solid #666666" }}>
      <LayoutContainer>
        <FooterWrapper>
          <span className="footer-title">{siteTitle} </span>
          <Nav
            menuLinks={[
              ...menuLinks,
              {
                name: "Privacy Policy",
                link: "privacy-policy"
              }
            ]}
            colour="black"
          />
        </FooterWrapper>
      </LayoutContainer>
    </div>
  );
};

export default Footer;
