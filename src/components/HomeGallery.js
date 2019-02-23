import React from "react";
import Slider from "react-slick";
const HomeGallery = () => {
  return (
    <Slider {...settings}>
      <div>
        <Image image="2.jpg" />
      </div>
    </Slider>
  );
};

export default HomeGallery;
