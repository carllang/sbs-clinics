import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";
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
  padding: 20px;
`;

const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialWrapper>
      <h2>Testimonials</h2>
      <LayoutContainer>
        <Slider {...settings}>
          {testimonials &&
            testimonials.map((testimonial, key) => {
              return (
                <div key={key}>
                  <h3>{testimonial.title}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              );
            })}
        </Slider>
      </LayoutContainer>
    </TestimonialWrapper>
  );
};

export default Testimonials;
