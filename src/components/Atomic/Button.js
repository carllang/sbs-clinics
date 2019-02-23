import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-image: linear-gradient(to bottom right, #05668d, #02c39a);
  border: none;
  display: inline;
  color: #ffffff;
  padding: 10px;
  width: 200px;
  font-size: 1.2em;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export { Button };
