import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'src/components/Image';

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
  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

class Gallery extends Component {
  renderGallery = () => {
    const { images, onGalleryImageClick } = this.props;
    return images.map((image, key) => (
      <ImageContainer key={key} onClick={() => onGalleryImageClick(key)}>
        <Image image={image.name} />
      </ImageContainer>
    ));
  };

  render() {
    return <SectionHomeGallery>{this.renderGallery()}</SectionHomeGallery>;
  }
}

export default Gallery;
