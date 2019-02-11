import React, { Component } from "react";
import Slider from "react-slick";
import Image from "../image";

class ImageGallery extends Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    }
  };
  render() {
    const { settings } = this.state;
    const { images } = this.props;
    return (
      <Slider {...settings}>
        {images &&
          images.map((image, key) => {
            return (
              <div key={key}>
                <Image image={image} />
              </div>
            );
          })}
      </Slider>
    );
  }
}

export default ImageGallery;
