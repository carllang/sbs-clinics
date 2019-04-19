import React from 'react';
import { Image } from 'src/components/Image';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import styled from 'styled-components';
import SBSImage from '../components/SBSImages/index.js';

const ImageCopySection = styled.section`
  display: flex;
  margin-bottom: 80px;
  @media all and (max-width: 768px) {
    display: block;
    margin-bottom: 0px;
  }
`;
const ImageContainer = styled.div`
  width: 80%;
  padding: ${props =>
    props.pos === 'left' ? '0px 20px 20px 0' : '0px 0px 20px 20px'};
  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 0px;
  }
`;
const StyledArticle = styled.article`
  width: 80%;
  padding: ${props =>
    props.pos === 'left' ? '0px 20px 20px 0' : '0px 0px 20px 20px'};

  h1 {
    text-align: initial;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
  }
`;

const Services = () => {
  return (
    <Layout page="services" headerTitle="Our Services">
      <SEO title="Services" />
      <LayoutContainer>
        <h1>Services</h1>

        <ImageCopySection>
          <StyledArticle pos="left">
            <h1>Concept & Interior Design</h1>
            Welcome to Smart Building Solutions (SBS). We are a diverse and
            dynamic construction company specialising in bespoke tailor made
            solutions at affordable rates. Whether you are residential or
            commercial we offer a unique range of services to meet your
            expectations.
          </StyledArticle>
          <ImageContainer>
            <SBSImage image="IMG_3185.JPG" imageQuery="images" />
          </ImageContainer>
        </ImageCopySection>

        <ImageCopySection>
          <ImageContainer pos="left">
            <SBSImage image="IMG_3361.JPG" imageQuery="images" />
          </ImageContainer>
          <StyledArticle>
            <h1>Dedicated Construction & Implementation Services</h1>
            Welcome to Smart Building Solutions (SBS). We are a diverse and
            dynamic construction company specialising in bespoke tailor made
            solutions at affordable rates. Whether you are residential or
            commercial we offer a unique range of services to meet your
            expectations.
          </StyledArticle>
        </ImageCopySection>
        <ImageCopySection>
          <StyledArticle pos="left">
            <h1>Contract Administration</h1>
            Welcome to Smart Building Solutions (SBS). We are a diverse and
            dynamic construction company specialising in bespoke tailor made
            solutions at affordable rates. Whether you are residential or
            commercial we offer a unique range of services to meet your
            expectations.
          </StyledArticle>
          <ImageContainer>
            <SBSImage image="IMG_3308.JPG" imageQuery="images" />
          </ImageContainer>
        </ImageCopySection>
        <ImageCopySection>
          <ImageContainer pos="left">
            <SBSImage image="IMG_3567.JPG" imageQuery="images" />
          </ImageContainer>
          <StyledArticle>
            <h1>Planning & Advisory Service</h1>
            Welcome to Smart Building Solutions (SBS). We are a diverse and
            dynamic construction company specialising in bespoke tailor made
            solutions at affordable rates. Whether you are residential or
            commercial we offer a unique range of services to meet your
            expectations.
          </StyledArticle>
        </ImageCopySection>
      </LayoutContainer>
    </Layout>
  );
};

export default Services;
