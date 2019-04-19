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
import './effect.css';

const Container = styled.div`
  text-align: justify;
  padding-top: 20px;
`;

const DetailsContainer = styled.div`
  margin-right: 20px;
  color: #000000;
  margin-top: 10px;
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const QuoteButtonContainer = styled.div`
  position: absolute;
  top: 0vh;
  right: 10px;
  z-index: 999;
  @media only screen and (max-width: 480px) {
    position: static;
    display: flex;
    justify-content: flex-end;
  }
`;

const MainWrapper = styled.main`
  background-color: #ffffff;
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
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          page={page}
          headerTitle={headerTitle}
        />
        {/* <DetailsContainer>
          +44(0)207 438 2005 enquiries@sbs-intex.co.uk
        </DetailsContainer> */}
        <Logo className="logo" />

        <div className={`page-content bottom-container ${page}`}>
          {page !== 'request-a-quote' ? (
            <QuoteButtonContainer>
              <QuoteButton />
            </QuoteButtonContainer>
          ) : null}

          <Container>
            <MainWrapper style={{ minHeight: '900px' }}>{children}</MainWrapper>
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
