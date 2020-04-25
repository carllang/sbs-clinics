import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/components/Nav';
import styled from 'styled-components';
import ImageGallery from 'src/components/ImageGallery';
import { Image } from 'src/components/Image';

const TopHeaderContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;
  width: 100%;
  border-bottom: 2px solid;
  color: #000000;
  padding: 14px 0;

  animation-name: flash_border;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes flash_border {
    0% {
      border-color: #bdbdbd;
    }
    50% {
      border-color: #9e9e9e;
    }
    100% {
      border-color: #bdbdbd;
    }
  }

  @-webkit-keyframes flash_border {
    0% {
      border-color: #bdbdbd;
    }
    50% {
      border-color: #9e9e9e;
    }
    100% {
      border-color: #bdbdbd;
    }
  }

  @-moz-keyframes flash_border {
    0% {
      border-color: #bdbdbd;
    }
    50% {
      border-color: #9e9e9e;
    }
    100% {
      border-color: #bdbdbd;
    }
  }

  @media all and (max-width: 768px) {
    opacity: 1;
    position: relative;
    border-bottom: none;
  }
`;

const ItemWrapper = styled.div`
  height: 18em;
  margin: 0 auto;
  overflow: hidden;
  background-color: #000000;
  h2 {
    margin-top: 12vh;
    margin-bottom: 0;
  }
  @media all and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-height: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.6;
  @media (min-width: 800px) {
    top: 50%;
    left: 0;
    max-height: none;
    width: 100%;
    transform: translateY(-50%);
    opacity: 0.6;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const TitleWrapper = styled.h2`
  z-index: 10;
  color: #ffffff;
  font-size: 4em;
  line-height: 1.85;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  width: 100%;
  @media all and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const renderHeaderImage = page => {
  switch (page) {
    case 'about':
      return 'nastuh-abootalebi-284879-unsplash';
    case 'sectors':
      return 'martha-dominguez-de-gouveia-572635-unsplash.jpg';
    case 'services':
      return 'nastuh-abootalebi-284883-unsplash.jpg';
    case 'news':
      return 'worapong-kaewtong-553394-unsplash.jpg';
    case 'our-projects':
      return 'toa-heftiba-644507-unsplash.jpg';
    case 'contact':
      return 'marko-pekic-145777-unsplash.jpg';
    default:
      return 'nastuh-abootalebi-284877-unsplash.jpg';
  }
};

const Header = ({ menuLinks, page, headerTitle = '' }) => {
  return (
    <>
      <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
      <label htmlFor="drawer-toggle" id="drawer-toggle-label" />

      <TopHeaderContainer id="drawer">
        <Nav menuLinks={menuLinks} />
      </TopHeaderContainer>
      {page === 'home' ? (
        <div className="page-content">
          <ImageGallery
            images={[
              {
                src: 'IMG_3332.JPG',
                title: 'Smart Building Solutions',
              },
              {
                src: 'IMG_3308.JPG',
                title: 'Dedicated Design Teams',
              },
              {
                src: 'IMG_3616.JPG',
                title: 'Expert Craftsmen',
              },
              {
                src: 'IMG_3361.JPG',
                title: 'Friendly Consultation',
              },
            ]}
          />
        </div>
      ) : (
        <ItemWrapper className="page-content">
          <TitleContainer>
            <TitleWrapper>{headerTitle}</TitleWrapper>
          </TitleContainer>

          <ImageWrapper>
            <Image
              image={renderHeaderImage(page)}
              className="header-image"
              title={headerTitle}
              imageQuery="images"
            />
          </ImageWrapper>
        </ItemWrapper>
      )}
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export { Header };
