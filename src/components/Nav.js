import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Ul = styled.ul`
  margin-bottom: 0px;
`;

const Li = styled.li`
  list-style-type: none;
  margin: 0px 20px 0 0;
  font-family: 'Open Sans';
  a {
    font-size: 1em;
    color: #ffffff;
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
    color: #ffffff;
    border-bottom: 4px solid #f50057;
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

const Nav = ({ menuLinks, colour }) => {
  return (
    <>
      <nav>
        <Ul>
          {menuLinks.map(link => (
            <Li key={link.name} style={{ listStyleType: 'none' }}>
              <StyledLink
                to={link.link}
                activeClassName="active-link"
                color={colour}
                className="effect-1"
              >
                {link.name}
              </StyledLink>
            </Li>
          ))}
        </Ul>
      </nav>
    </>
  );
};

export default Nav;
