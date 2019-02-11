import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Ul = styled.ul`
  margin-bottom: 0px;
`;

const Li = styled.li`
  list-style-type: none;
  margin: 50px 20px 0 0;
  @media all and (min-width: 767px) {
    display: inline-block;
  }
`;

const Nav = ({ menuLinks }) => {
  return (
    <>
      <nav>
        <Ul>
          {menuLinks.map(link => (
            <Li key={link.name} style={{ listStyleType: "none" }}>
              <Link to={link.link} activeClassName="active-link">
                {link.name}
              </Link>
            </Li>
          ))}
        </Ul>
      </nav>
    </>
  );
};

export default Nav;
