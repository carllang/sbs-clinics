import React, { Component } from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';

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
    return images.edges.map((n, key) => {
      return (
        <Img
          image={n.node.relativePath}
          sizes={n.node.childImageSharp.sizes}
          fadeIn
          style={{ width: '100%' }}
          key={key}
        />
      );
    });
  };

  renderThumbImages = () => {
    const { images } = this.props;
    return images.edges.map((n, key) => {
      return (
        <Img
          image={n.node.relativePath}
          sizes={n.node.childImageSharp.sizes}
          fadeIn
          style={{ width: '100%' }}
          key={key}
        />
      );
    });
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
