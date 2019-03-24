import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Image } from 'src/components/Image';
import posed from 'react-pose';

const StyledImage = styled.div`
  cursor: pointer;
`;

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
});

class GalleryWithThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  componentDidUpdate() {
    const { gotoSlide } = this.props;
    this.slider1.slickGoTo(gotoSlide);
  }

  renderImages = () => {
    const { images } = this.props;
    return images.map((image, key) => <Image key={key} image={image.name} />);
  };

  renderThumbImages = () => {
    const { images } = this.props;
    return images.map((image, key) => (
      <Box className="box" key={key}>
        <Image image={image.name} style={{ cursor: 'pointer' }} />
      </Box>
    ));
  };

  render() {
    const { nav1, nav2 } = this.state;

    return (
      <div className="GalleryWithThumbnail">
        <Slider
          asNavFor={nav2}
          ref={slider => {
            this.slider1 = slider;
          }}
          focusOnSelect
          fade
        >
          {this.renderImages()}
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={slider => {
            this.slider2 = slider;
          }}
          slidesToShow={4}
          swipeToSlide
          focusOnSelect
        >
          {this.renderThumbImages()}
        </Slider>
      </div>
    );
  }
}

export { GalleryWithThumbnail };
