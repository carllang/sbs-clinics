import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Li = styled.li`
  list-style-type: none;
  margin-right: 15px;
  margin-top: 20px;
`;

const Nav = ({ menuLinks }) => {
  return (
    <NavContainer>
      {menuLinks.map(link => (
        <Li key={link.name} style={{ listStyleType: "none" }}>
          <Link to={link.link}>{link.name}</Link>
        </Li>
      ))}
    </NavContainer>
  );
};

export default Nav;
