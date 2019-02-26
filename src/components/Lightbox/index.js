import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "src/components/Image";
import Slider from "react-slick";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "../../../node_modules/react-popupbox/dist/react-popupbox.css";
import "./Lightbox.css";

const Container = styled.div`
  max-height: 90vh;
`;

class Lightbox extends Component {
  openPopupbox() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: true,
      fade: false
    };
    const content = (
      <Container>
        <Slider {...settings}>
          <Image image="2.jpg" style={{ height: "100vh" }} />
          {/* <Image image="3.jpg" />
          <Image image="5.jpg" />
          <Image image="6.jpg" /> */}
        </Slider>
      </Container>
    );
    PopupboxManager.open({ content });
  }

  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: "Showcase"
      },
      fadeIn: true,
      fadeInSpeed: 500
    };

    return (
      <div>
        <button onClick={this.openPopupbox}>Click me</button>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    );
  }
}

export { Lightbox };
