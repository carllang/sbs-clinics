import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/components/Nav';
import styled from 'styled-components';
import { ImageGallery } from 'src/components/Slick';
import { Image } from 'src/components/Image';

const TopHeaderContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;

  opacity: 0.6;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  color: #ffffff;
  padding-top: 60px;
  @media all and (max-width: 768px) {
    opacity: 1;
    position: relative;
    border-bottom: none;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 85vh;
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
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 0.6;
`;

const TitleWrapper = styled.h2`
  z-index: 10;
  color: #ffffff;
  font-size: 4em;
  border-bottom: 2px solid #ffffff;
  display: inline-block;
  line-height: 1.85;
  @media all and (max-width: 768px) {
    font-size: 3em;
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
    case 'case-studies':
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
        <Nav menuLinks={menuLinks} colour="white" />
      </TopHeaderContainer>
      {page === 'home' ? (
        <div className="page-content" style={{ marginTop: '-100px' }}>
          <ImageGallery
            images={[
              {
                src: 'nastuh-abootalebi-284877-unsplash.jpg',
                title: 'Smart Building Solutions',
              },
              {
                src: 'samuel-zeller-110931-unsplash.jpg',
                title: 'Dedicated Design Teams',
              },
              {
                src: 'christopher-burns-368617-unsplash.jpg',
                title: 'Expert Craftsmen',
              },
              {
                src: 'daniel-frank-201417-unsplash.jpg',
                title: 'Friendly Consultation',
              },
            ]}
          />
        </div>
      ) : (
        <ItemWrapper className="page-content" style={{ marginTop: '-230px' }}>
          <TitleWrapper>{headerTitle}</TitleWrapper>
          <ImageWrapper>
            <Image
              image={renderHeaderImage(page)}
              className="header-image"
              title={headerTitle}
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
