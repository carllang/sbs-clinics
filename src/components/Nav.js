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
    border-bottom: 4px solid #3f51b5;
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
          {menuLinks.map(link => {
            let hoverMenu = null;
            if (link.link === '/sectors') {
              hoverMenu = 'hoverMenu';
            }

            return (
              <Li key={link.name} style={{ listStyleType: 'none' }}>
                <StyledLink
                  to={link.link}
                  activeClassName="active-link"
                  color={colour}
                  className={`effect-1 ${hoverMenu}`}
                >
                  {link.name}
                </StyledLink>
                {hoverMenu && (
                  <div className="dropdown-content">
                    <Link to="/healthcare" className="effect-1">
                      Healthcare
                    </Link>
                    <Link to="/residential" className="effect-1">
                      Residential
                    </Link>
                    <Link to="/commercial" className="effect-1">
                      Commercial
                    </Link>
                  </div>
                )}
              </Li>
            );
          })}
        </Ul>
      </nav>
    </>
  );
};

export default Nav;
