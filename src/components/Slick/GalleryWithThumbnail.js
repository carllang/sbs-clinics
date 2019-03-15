import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image } from 'src/components/Image';

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
    return images.map(image => <Image image={image.name} />);
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
          {this.renderImages()}
        </Slider>
      </div>
    );
  }
}

export { GalleryWithThumbnail };
