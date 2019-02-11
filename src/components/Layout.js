import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./Header";
import styled from "styled-components";

import "./layout.scss";
import "./nav.css";

const Container = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 20px 1.5rem 2rem;
  text-align: justify;
`;

const Layout = ({ children, page }, ...props) => (
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
        <Header menuLinks={data.site.siteMetadata.menuLinks} page={page} />

        <div className="page-content bottom-container">
          <Container>
            <main>{children}</main>
            <footer>
              {data.site.siteMetadata.title} © {new Date().getFullYear()}
            </footer>
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
