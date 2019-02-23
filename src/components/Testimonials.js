import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";

import "./testimonials.css";

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
  padding: 20px 0 20px;
  margin: 60px 0;
  h3,
  h2 {
    margin-bottom: 2px;
  }
`;

const Quote = styled.p`
  font-style: italic;
`;

const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialWrapper id="Testimonials">
      <h2>Testimonials</h2>
      <LayoutContainer>
        <Slider {...settings}>
          {testimonials &&
            testimonials.map((testimonial, key) => {
              return (
                <div key={key}>
                  <Quote>"{testimonial.quote}"</Quote>

                  <h3>{testimonial.name}</h3>
                  <h3>{testimonial.company}</h3>
                </div>
              );
            })}
        </Slider>
      </LayoutContainer>
    </TestimonialWrapper>
  );
};

export default Testimonials;
