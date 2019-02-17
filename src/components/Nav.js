import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Ul = styled.ul`
  margin-bottom: 0px;
`;

const Li = styled.li`
  list-style-type: none;
  margin: 0px 20px 0 0;
  color: #ffffff;
  @media all and (min-width: 767px) {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => (props.color === "white" ? "#ffffff" : "#000000")};
  text-decoration: none;
`;

const Nav = ({ menuLinks, colour }) => {
  return (
    <>
      <nav>
        <Ul>
          {menuLinks.map(link => (
            <Li key={link.name} style={{ listStyleType: "none" }}>
              <StyledLink
                to={link.link}
                activeClassName="active-link"
                color={colour}
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
