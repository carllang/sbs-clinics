import React, { Component } from "react";
import styled from "styled-components";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { GalleryWithThumbnail } from "../Slick/GalleryWithThumbnail";
import "../../../node_modules/react-popupbox/dist/react-popupbox.css";
import "./Lightbox.css";
import "./slick-override.css"

const Container = styled.div``;

const ThumbnailGallery = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: space-between;
  .item {
    flex: 1 0 auto;
    display: block;
  }
`;

class Lightbox extends Component {
  openPopupbox() {
    const content = (
      <Container>
        <GalleryWithThumbnail />
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
