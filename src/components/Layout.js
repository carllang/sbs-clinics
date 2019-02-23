import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Header } from "src/components/Header";
import Footer from "src/components/Footer";
import { Logo } from "src/components/Atomic/Logo";

import "./layout.scss";
import "./nav.css";

const Container = styled.div`
  text-align: justify;
`;

const Layout = ({ children, page, headerTitle }, ...props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Logo className="page-content">SBS</Logo>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          page={page}
          headerTitle={headerTitle}
        />
        <div className="page-content bottom-container">
          <Container>
            <main>{children}</main>
            <Footer
              siteTitle={`© ${new Date().getFullYear()} ${
                data.site.siteMetadata.title
              }`}
              menuLinks={data.site.siteMetadata.menuLinks}
            />
          </Container>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
