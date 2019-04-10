import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header } from 'src/components/Header';
import Footer from 'src/components/Footer';
import { Logo } from 'src/components/Atomic/Logo';
import QuoteButton from 'src/components/QuoteButton';
import './layout.scss';
import './nav.css';

const Container = styled.div`
  text-align: justify;
  padding-top: 20px;
`;

const QuoteButtonContainer = styled.div`
  position: fixed;
  top: 0vh;
  right: 10px;
  z-index: 999;
  @media only screen and (max-width: 480px) {
    top: 33vh;
  }
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
        <div className={`page-content bottom-container ${page}`}>
          {page !== 'request-a-quote' ? (
            <QuoteButtonContainer>
              <QuoteButton />
            </QuoteButtonContainer>
          ) : null}

          <Container>
            <main style={{ minHeight: '900px' }}>{children}</main>
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
  children: PropTypes.node.isRequired,
};

export default Layout;
