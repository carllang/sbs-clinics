import React from 'react';
import styled from 'styled-components';
import TizianoImage from '../SBSImages/Tiziano/index.js';

import caseStudies from '../../jsonData/CaseStudies';

const ImageWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 200px;
  padding: 20px;
  flex-shrink: 1;
  cursor: pointer;

  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const renderImages = images => {
  return images.map((image, key) => (
    <ImageContainer key={key} onClick={() => {}}>
      <TizianoImage
        image={image}
        imageQuery="images"
        style={{ width: '100%' }}
      />
    </ImageContainer>
  ));
};

const Section = () => {
  return (
    <div>
      <header>
        <h2>{caseStudies.section.dental.name}</h2>
      </header>
      <ImageWrapper>
        {renderImages(caseStudies.section.dental.images)}
      </ImageWrapper>
    </div>
  );
};

export default Section;
