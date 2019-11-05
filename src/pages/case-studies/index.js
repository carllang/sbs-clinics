import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ImageContainer = styled.div`
  width: 100%;

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

const StyledSection = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const ContentWrapper = styled.section`
  width: 90%;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CaseStudies = ({ data }) => {
  return (
    <Layout page="case-studies" headerTitle="Case Studies">
      <SEO title="Case Studies" />
      <LayoutContainer>
        <StyledArticle pos="left">
          <h1>Our work</h1>
          <p>The following are projects we have worked on:</p>
        </StyledArticle>
        <Wrapper>
          <StyledSection>
            <ContentWrapper>
              <Link to="/case-study/#">
                <figure className="effect-sarah">
                  <ImageContainer className="image">
                    <Img
                      sizes={
                        data.casestudyImages.edges[1].node.childImageSharp.sizes
                      }
                      fadeIn
                      style={{ width: '100%' }}
                    />
                  </ImageContainer>
                  <figcaption>
                    <h2>Healthcare</h2>
                    <p>Click here to see this impressive case study</p>
                  </figcaption>
                </figure>
              </Link>
            </ContentWrapper>
          </StyledSection>

          <StyledSection>
            <ContentWrapper>
              <Link to="/case-study/#">
                <figure className="effect-sarah">
                  <ImageContainer className="image">
                    <Img
                      sizes={
                        data.casestudyImages.edges[0].node.childImageSharp.sizes
                      }
                      fadeIn
                      style={{ width: '100%' }}
                    />
                  </ImageContainer>
                  <figcaption>
                    <h2>Residential</h2>
                    <p>Click here to see our approach to this bespoke build</p>
                  </figcaption>
                </figure>
              </Link>
            </ContentWrapper>
          </StyledSection>
          <StyledSection>
            <ContentWrapper>
              <Link to="/case-study/#">
                <figure className="effect-sarah">
                  <ImageContainer className="image">
                    <Img
                      sizes={
                        data.casestudyImages.edges[0].node.childImageSharp.sizes
                      }
                      fadeIn
                      style={{ width: '100%' }}
                    />
                  </ImageContainer>
                  <figcaption>
                    <h2>Commercial</h2>
                    <p>Click here to see our approach to this bespoke build</p>
                  </figcaption>
                </figure>
              </Link>
            </ContentWrapper>
          </StyledSection>
        </Wrapper>
      </LayoutContainer>
    </Layout>
  );
};

export default CaseStudies;
export const query = graphql`
  query caseStudies {
    casestudyImages: allFile(
      filter: { sourceInstanceName: { eq: "casestudies" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 5000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
