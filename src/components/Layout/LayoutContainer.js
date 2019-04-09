import React from 'react';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  margin: 0px auto;
  padding: 1.5rem;
  width: 1200px;
  @media only screen and (min-width: 960px) and (max-width: 1199px) {
    width: 959px;
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    width: 720px;
  }
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    width: 460px;
  }
`;
