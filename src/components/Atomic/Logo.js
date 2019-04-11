import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.span`
  font-size: 3em;
  margin-left: 0.2em;
  z-index: 11;
  color: #f7f7f7;
  font-weight: bold;
  @media all and (max-width: 768px) {
    #drawer-toggle:checked ~ .page-content {
      position: relative;
    }
  }
`;

const Logo = props => {
  return <StyledLogo {...props}>SBS</StyledLogo>;
};

export { Logo };
