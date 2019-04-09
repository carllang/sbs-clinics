import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Image } from 'src/components/Image';

const SliderWrapper = styled.div`
  @media all and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const ItemWrapper = styled.div`
  height: 40em;
  margin: 0 auto;
  overflow: hidden;
  background-color: #000000;
  position: relative;
  h2 {
    margin-top: 12vh;
    margin-bottom: 0;
  }
  @media all and (max-width: 768px) {
    margin-top: 0px;
  }
  h2 {
    margin-top: 27vh;
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-height: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.6;
  @media (min-width: 800px) {
    top: 50%;
    left: 0;
    max-height: none;
    width: 100%;
    transform: translateY(-50%);
    opacity: 0.6;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const TitleWrapper = styled.h2`
  z-index: 1001;
  color: #ffffff;
  font-size: 4em;
  line-height: 1.85;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  width: 100%;
  @media all and (max-width: 768px) {
    font-size: 3em;
  }
`;

class ImageGallery extends Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: false,
    },
  };

  render() {
    const { settings } = this.state;
    const { images } = this.props;
    return (
      <SliderWrapper>
        <Slider {...settings}>
          {images &&
            images.map((image, key) => {
              return (
                <ItemWrapper key={key}>
                  <TitleContainer>
                    <TitleWrapper>{image.title}</TitleWrapper>
                  </TitleContainer>
                  <ImageWrapper>
                    <Image image={image.src} title={image.title} />
                  </ImageWrapper>
                </ItemWrapper>
              );
            })}
        </Slider>
      </SliderWrapper>
    );
  }
}

export default ImageGallery;
