import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 3em;
  margin-left: 0.2em;
  z-index: 11;
  color: #f7f7f7;
  font-weight: bold;
`;

const Logo = () => {
  return <StyledLogo className="logo">SBS</StyledLogo>;
};

export { Logo };
