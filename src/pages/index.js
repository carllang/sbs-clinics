import React from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { Image } from "src/components/Image";
import SEO from "src/components/seo";
import Testimonials from "src/components/Testimonials";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";
import { Lightbox } from "src/components/Lightbox";
import PageTransition from "gatsby-plugin-page-transitions";

const SectionHomeGallery = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 20px;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  width: 11em;
  flex-shrink: 0;
  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ImageSpacer = styled.div`
  width: 1em;
`;

const IndexPage = ({ data }) => (
  <PageTransition>
    <Layout page="home">
      <LayoutContainer>
        <SEO title="Home" keywords={[`construction`, `clinic`, `interior`]} />
        <p />
        <h1 className="centered-text">
          Specialist Design and Build Contractors
        </h1>
        <p className="centered-text">
          Welcome to {data.site.siteMetadata.title}
        </p>
        <p className="centered-text">
          We are a diverse and dynamic construction company specialising in
          bespoke tailor made solutions at affordable rates. Whether you are
          residential or commercial we offer a unique range of services to meet
          your expectations.
        </p>
        <p className="centered-text">
          Unlike our competitors we provide cost effective results that save you
          time and most importantly money, allowing you to focus on your own
          goals.
        </p>
        <p className="centered-text">
          We source all of our products and materials from a vast array of
          suppliers who are based within the UK and in Europe ensuring you
          receive the finest quality for the lowest possible price.
        </p>
        <p className="centered-text">
          Our team consists of expert tradesmen and professionals who ensure
          exceptional delivery for all your building and construction needs.
          Give us a call or drop us a line for a friendly consultation.
        </p>
        <Lightbox />
        <SectionHomeGallery className="Home">
          <ImageContainer>
            <Image image="1-first.jpg" />
          </ImageContainer>
          <ImageSpacer />
          <ImageContainer>
            <Image image="2.jpg" />
          </ImageContainer>
          <ImageSpacer />
          <ImageContainer>
            <Image image="3.jpg" />
          </ImageContainer>
          <ImageSpacer />
          <ImageContainer>
            <Image image="4-fourth.jpg" />
          </ImageContainer>
        </SectionHomeGallery>
        <SectionHomeGallery className="Home">
          <ImageContainer>
            <Image image="5.jpg" />
          </ImageContainer>
          <ImageSpacer />
          <ImageContainer>
            <Image image="6.jpg" />
          </ImageContainer>
          <ImageSpacer />
          <ImageContainer>
            <Image image="7.jpg" />
          </ImageContainer>
          <ImageSpacer />
          <ImageContainer>
            <Image image="8.jpg" />
          </ImageContainer>
        </SectionHomeGallery>
      </LayoutContainer>
      <section>
        <Testimonials
          testimonials={[
            {
              name: "A. Harrow",
              company: "Dental Surgery, Chelsea",
              quote: "Excellent service and delightful results."
            },
            {
              name: "J. Smith",
              company: "Cromwell Hospital",
              quote: "We would recommend SBS to our company partners"
            },
            {
              name: "K. Wallace",
              company: "Wallace Dental",
              quote: "Above and beyond quality and exceptional craftsmanship"
            }
          ]}
        />
      </section>
    </Layout>
  </PageTransition>
);

export default IndexPage;

export const query = graphql`
  query HomeSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
