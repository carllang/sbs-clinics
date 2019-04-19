import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

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

const Residential = ({ data }) => {
  return (
    <Layout page="Residential" headerTitle="Residential">
      <SEO title="Healthcare" />
      <LayoutContainer>
        <h1>Residential</h1>

        <ImageCopySection>
          <StyledArticle pos="left">
            <h1>High End Residential Contractors</h1>
            Apollo Residential are high end residential contractors in London
            and nationwide. With a seamless design and build ethic, based on
            integrity, expertise and reliability we deliver high quality, high
            end, contemporary residential interior design of varying scales. Our
            bespoke cutting edge designs have made Apollo a ‘first choice’
            design and build contractor when it comes to high quality
            residential refurbishment projects.
          </StyledArticle>
          <ImageContainer>
            <Img
              sizes={data.residentialImages.edges[5].node.childImageSharp.sizes}
              fadeIn
              style={{ width: '100%' }}
            />
          </ImageContainer>
        </ImageCopySection>

        <ImageCopySection>
          <ImageContainer pos="left">
            <Img
              sizes={data.residentialImages.edges[6].node.childImageSharp.sizes}
              fadeIn
              style={{ width: '100%' }}
            />
          </ImageContainer>
          <StyledArticle>
            <h1>Great working medical practice design</h1>
            We design and build our projects to support your business objectives
            and meet your medical refurbishment needs. We understand how
            important it is to meet your brief, empathise with your surroundings
            and meet critical deadlines and budgets.
          </StyledArticle>
        </ImageCopySection>
        <ImageCopySection>
          <StyledArticle pos="left">
            <h1>Who we design for</h1>
            As specialist medical building contractors, we are proud of the fact
            that we have designed many of London’s most reputable clinics,
            laboratories, hospitals and surgeries. From ICF clinics to laser
            surgeries and laboratory refurbishment projects – we have a medical
            interiors portfolio to be proud of.
          </StyledArticle>
          <ImageContainer>
            <Img
              sizes={data.residentialImages.edges[7].node.childImageSharp.sizes}
              fadeIn
              style={{ width: '100%' }}
            />
          </ImageContainer>
        </ImageCopySection>
        <article>
          <h1>Services</h1>
          <p>
            Structural Radiation Shielding We install structural radiation
            shielding to OPG Rooms, CT Scanner Rooms and to walls within
            surgeries where X Rays are taken to shield operators from radiation.
            All our works are tested by the Health Protection Agency (HPA) to
            make sure we create functional and safe Dental Interior space CQC &
            HTM Advisory Service Due to our vast experience as medical building
            contractors within the dental and medical practice design and
            refurbishment field, we are able to advise our clients through the
            design stage to ensure that all the room layouts and equipment
            installations comply with CQC and HTM regulations, to either best
            practice or CQC essential requirement guidelines.
          </p>
          <p>&nbsp;</p>
        </article>
        <ImageCopySection>
          <StyledArticle pos="left">
            <h1>Case study</h1>
            Read more about our case study of the work done at
          </StyledArticle>
          <div style={{ width: '100%' }}>
            <Link to="/case-study/healthcare/residential/#">
              <figure className="effect-sarah">
                <div className="image">
                  <Img
                    sizes={
                      data.residentialImages.edges[3].node.childImageSharp.sizes
                    }
                    fadeIn
                    style={{ width: '100%' }}
                  />
                </div>
                <figcaption>
                  <h2>Residential</h2>
                  <p>Read more about this impressive case study</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </ImageCopySection>
      </LayoutContainer>
    </Layout>
  );
};

export default Residential;

export const query = graphql`
  query residentialcareQuery {
    residentialImages: allFile(
      filter: { sourceInstanceName: { eq: "healthcareTiziano" } }
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
