import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Image } from "src/components/Image";

const SliderWrapper = styled.div`
  margin-top: -200px;
  @media all and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
`;

const HeroTitle = styled.div``;

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
      fade: false
    }
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
                <div>
                  <ItemWrapper key={key}>
                    {/* <h1>{image.title}</h1> */}
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
