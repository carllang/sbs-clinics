import React from 'react';
import styled from 'styled-components';
import { Image } from 'src/components/Image';

const StyledLogo = styled.span`
  z-index: 11;
  width: 157px;
  height: 100%;
  position: absolute;
  top: 3px;
  left: 0px;
  @media all and (max-width: 768px) {
    #drawer-toggle:checked ~ .page-content {
      position: relative;
    }
  }
`;

const Logo = props => {
  return (
    <StyledLogo {...props}>
      <Image image="sbs-transparent.png" imageQuery="images" />
    </StyledLogo>
  );
};

export { Logo };
