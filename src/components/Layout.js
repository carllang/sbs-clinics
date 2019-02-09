import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./Header";
import Nav from "src/components/Nav";
import { ImageGallery } from "src/components/Slick";

import "./layout.css";
import "./nav.css";
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
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
        {/* <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        /> */}
        {/* <ImageGallery
      images={[
        "pacific.jpg",
        "reinaldo-kevin-640696-unsplash.jpg",
        "samuel-zeller-110931-unsplash.jpg",
        "toa-heftiba-644507-unsplash.jpg",
        "worapong-kaewtong-553394-unsplash.jpg"
      ]}
    /> */}
        <Nav menuLinks={data.site.siteMetadata.menuLinks} />
        <div id="page-content">
          <Container>
            <main>{children}</main>

            <footer>© {new Date().getFullYear()}</footer>
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
