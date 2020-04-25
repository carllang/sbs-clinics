import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import { Image } from 'src/components/Image';
import { Link } from 'gatsby';
import './nav.css';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;

  a {
    color: #666666;
    font-family: 'Open Sans';
  }
  .footer-title {
    color: #666666;
    font-family: 'Open Sans';
  }
  .active-link {
    font-weight: bold;

    color: #000000;
  }
`;

const DetailsContainer = styled.span`
  margin-right: 10px;
  margin-top: 0px;
  display: inline-block;
  left: 200px;
  z-index: 9;
  font-family: 'Open Sans';
  color: #666666;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  z-index: 11;
  width: 157px;
  height: 100%;

  @media all and (max-width: 768px) {
    #drawer-toggle:checked ~ .page-content {
      position: relative;
    }
  }
`;

const Ul = styled.ul`
  margin-bottom: 0px;
  margin-left: 0px;
`;

const Li = styled.li`
  list-style-type: none;
  margin: 0px 10px 0 0;
  font-family: 'Open Sans';
  &:last-of-type {
    margin-right: 0px;
  }
  @media all and (min-width: 767px) {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &.active-link {
    font-weight: bold;
    font-size: 1em;

    border-bottom: 4px solid #d2d2d2;
  }

  &:before {
    width: 100%;
    height: 2px;
    background: darken($bg, 10%);
    transform: scaleX(0);
    content: '';
    transition: transform 0.5s ease;
  }
  &:hover:before {
    transform: scaleX(1);
  }
`;

const Footer = ({ siteTitle, menuLinks }) => {
  return (
    <div style={{ borderTop: '1px solid #efefef', backgroundColor: '#d2d2d2' }}>
      <LayoutContainer>
        <FooterWrapper className="footer">
          <div>
            <LogoContainer>
              <Image image="header_only" imageQuery="logos" />
            </LogoContainer>
            <span
              className="footer-title"
              style={{ fontSize: '0.7em', marginLeft: '5px' }}
            >
              {siteTitle}{' '}
            </span>
          </div>
          <Ul>
            <Li key="wimdows" style={{ listStyleType: 'none' }}>
              <StyledLink
                to="/about"
                activeClassName="active-link"
                className="effect-1"
              >
                About us
              </StyledLink>
            </Li>
            <Li key="privacypolicy" style={{ listStyleType: 'none' }}>
              <StyledLink
                to="/privacy-policy"
                activeClassName="active-link"
                className="effect-1"
              >
                Privacy policy
              </StyledLink>
            </Li>
            <Li key="terms" style={{ listStyleType: 'none' }}>
              <StyledLink
                to="/terms"
                activeClassName="active-link"
                className="effect-1"
              >
                Terms &amp; conditions
              </StyledLink>
            </Li>
          </Ul>
          <DetailsContainer>
            +44 (0) 2078460083 &nbsp;&nbsp;
            <a href="mailto: enquiries@sbs-intex.co.uk">
              enquiries@sbs-intex.co.uk
            </a>
          </DetailsContainer>
        </FooterWrapper>
      </LayoutContainer>
    </div>
  );
};

export default Footer;
