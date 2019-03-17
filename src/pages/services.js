import React from 'react';
import { Image } from 'src/components/Image';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import styled from 'styled-components';

const ImageCopySection = styled.section`
  display: flex;
  margin-bottom: 80px;
  box-shadow: 1px 3px 10px #999999;
`;
const ImageContainer = styled.div`
  width: 90%;

  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const StyledArticle = styled.article`
  width: 100%;
  padding: 20px 20px;
  h1 {
    text-align: initial;
  }
`;

const Services = ({ data }) => {
  return (
    <Layout page="services" headerTitle="Our Services">
      <SEO title="Services" />
      <LayoutContainer>
        <h1>Services</h1>

        <ImageCopySection>
          <StyledArticle>
            <h1>Concept & Interior Design</h1>
            Welcome to Smart Building Solutions (SBS). We are a diverse and
            dynamic construction company specialising in bespoke tailor made
            solutions at affordable rates. Whether you are residential or
            commercial we offer a unique range of services to meet your
            expectations.
          </StyledArticle>
          <ImageContainer>
            <Image image="martha-dominguez-de-gouveia-572635-unsplash.jpg" />
          </ImageContainer>
        </ImageCopySection>

        <ImageCopySection>
          <ImageContainer>
            <Image image="pacific.jpg" />
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
          <StyledArticle>
            <h1>Contract Administration</h1>
            Welcome to Smart Building Solutions (SBS). We are a diverse and
            dynamic construction company specialising in bespoke tailor made
            solutions at affordable rates. Whether you are residential or
            commercial we offer a unique range of services to meet your
            expectations.
          </StyledArticle>
          <ImageContainer>
            <Image image="apartment-ceiling-chair-263201.jpg" />
          </ImageContainer>
        </ImageCopySection>
        <ImageCopySection>
          <ImageContainer>
            <Image image="daniel-frank-201417-unsplash.jpg" />
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

// export const query = graphql`
//   query {
//     allWordpressPage {
//       edges {
//         node {
//           title
//           status
//           date
//           content
//         }
//       }
//     }
//   }
// `;
