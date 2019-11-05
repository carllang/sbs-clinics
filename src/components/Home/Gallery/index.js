import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import posed from 'react-pose';

const SectionHomeGallery = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 60px 0 20px;
  flex-wrap: wrap;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  width: 285px;
  padding: 10px;
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
    const { onGalleryImageClick, images } = this.props;

    return images.edges.map((n, key) => {
      return (
        <ImageContainer key={key} onClick={() => onGalleryImageClick(key)}>
          <Box className="box">
            <Img
              image={n.node.relativePath}
              sizes={n.node.childImageSharp.sizes}
              fadeIn
              style={{ width: '100%' }}
            />
          </Box>
        </ImageContainer>
      );
    });
  };

  render() {
    return <SectionHomeGallery>{this.renderGallery()}</SectionHomeGallery>;
  }
}

export default Gallery;
