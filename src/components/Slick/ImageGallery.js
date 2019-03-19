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
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  background-color: #000000;
  h2 {
    margin-top: 20vh;
    margin-bottom: 0;
  }
  @media all and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 0.6;
`;

const TitleWrapper = styled.h2`
  z-index: 10;
  color: #ffffff;
  font-size: 4em;
  @media all and (max-width: 768px) {
    font-size: 3em;
  }
`;

class HeaderImageGallery extends Component {
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
                <div key={key}>
                  <ItemWrapper>
                    <TitleWrapper>{image.title}</TitleWrapper>
                    <ImageWrapper>
                      <Image image={image.src} title={image.title} />
                    </ImageWrapper>
                  </ItemWrapper>
                </div>
              );
            })}
        </Slider>
      </SliderWrapper>
    );
  }
}

export default HeaderImageGallery;
