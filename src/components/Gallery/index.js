import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'src/components/Image';
import posed from 'react-pose';

const SectionHomeGallery = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 20px;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding: 20px;
  flex-shrink: 1;
  cursor: pointer;

  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
  },
});

class Gallery extends Component {
  renderGallery = () => {
    const { images, onGalleryImageClick } = this.props;
    return images.map((image, key) => (
      <ImageContainer key={key} onClick={() => onGalleryImageClick(key)}>
        <Box className="box">
          <Image image={image.name} />
        </Box>
      </ImageContainer>
    ));
  };

  render() {
    return <SectionHomeGallery>{this.renderGallery()}</SectionHomeGallery>;
  }
}

export default Gallery;
