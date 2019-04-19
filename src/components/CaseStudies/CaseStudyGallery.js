import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
  width: 300px;
  padding: 10px;
  flex-shrink: 1;
  cursor: pointer;

  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

class CaseStudyGallery extends Component {
  renderGallery = () => {
    const { images } = this.props;

    return images.edges.map((n, key) => {
      return (
        <ImageContainer key={key} onClick={() => {}}>
          <Img
            image={n.node.relativePath}
            sizes={n.node.childImageSharp.sizes}
            fadeIn
            style={{ width: '100%' }}
          />
        </ImageContainer>
      );
    });
  };

  render() {
    return <SectionHomeGallery>{this.renderGallery()}</SectionHomeGallery>;
  }
}

export default CaseStudyGallery;
