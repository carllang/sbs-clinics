import React from 'react';
import Slider from 'react-slick';
import { Image } from 'src/components/Image';

const HomeGallery = () => {
  return (
    <Slider {...settings}>
      <div>
        <Image image="2.jpg" imageQuery="images" />
      </div>
    </Slider>
  );
};

export default HomeGallery;
