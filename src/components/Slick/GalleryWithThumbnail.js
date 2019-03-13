import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "src/components/Image";

class GalleryWithThumbnail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render() {
    const { initialSlide } = this.props;
    return (
      <div>
        <h2>Gallery</h2>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          focusOnSelect
          fade
          initialSlide={initialSlide || 0}
        >
          <Image image="nastuh-abootalebi-284877-unsplash.jpg" />
          <Image image="toa-heftiba-644507-unsplash.jpg" />
          <Image image="daniel-frank-201417-unsplash.jpg" />
          <Image image="georgie-cobbs-459520-unsplash.jpg" />
        </Slider>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide
          focusOnSelect
        >
          <Image image="nastuh-abootalebi-284877-unsplash.jpg" />
          <Image image="toa-heftiba-644507-unsplash.jpg" />
          <Image image="daniel-frank-201417-unsplash.jpg"  />
          <Image image="georgie-cobbs-459520-unsplash.jpg" />
        </Slider>
      </div>
    )
  }
}

export { GalleryWithThumbnail }
