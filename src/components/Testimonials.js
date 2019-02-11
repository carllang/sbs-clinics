import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false
};

const TestimonialWrapper = styled.article`
  text-align: center;
  background: beige;
`;

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <Slider {...settings}>
        {testimonials &&
          testimonials.map((testimonial, key) => {
            return (
              <TestimonialWrapper key={key}>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.quote}</p>
              </TestimonialWrapper>
            );
          })}
      </Slider>
    </div>
  );
};

export default Testimonials;
