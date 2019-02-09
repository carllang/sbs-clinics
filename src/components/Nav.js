import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavContainer = styled.nav``;

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
`;

const Nav = ({ menuLinks }) => {
  return (
    <>
      <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
      <label htmlFor="drawer-toggle" id="drawer-toggle-label" />
      <NavContainer id="drawer">
        <ul>
          {menuLinks.map(link => (
            <Li key={link.name} style={{ listStyleType: "none" }}>
              <Link to={link.link}>{link.name}</Link>
            </Li>
          ))}
        </ul>
      </NavContainer>
    </>
  );
};

export default Nav;
