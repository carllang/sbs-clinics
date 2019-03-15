import React, { Component } from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

import '../../../node_modules/react-popupbox/dist/react-popupbox.css';
import './Lightbox.css';
import './slick-override.css';

class Lightbox extends Component {
  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: 'Showcase',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    return <PopupboxContainer {...popupboxConfig} />;
  }
}

export { Lightbox };
