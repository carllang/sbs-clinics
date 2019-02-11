import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Testimonials from "../components/Testimonials";

const SectionHomeGallery = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  height: 200px;
`;

const IndexPage = ({ data }) => (
  <Layout page="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p />
    <h1 className="centered-text">Specialist Design and Build Contractors</h1>
    <p className="centered-text">Welcome to {data.site.siteMetadata.title}</p>
    <p className="centered-text">
      Specialist Design and Build Contractors Manage your design and build
      project from concept right through to completion with SBS Interiors. We
      are high-end design and build contractors specialising in the dental,
      medical, commercial and residential sectors. When you work with us, we’ll
      provide everything you need, at every step of the way, for high-quality
      results in your construction, refurbishment or fit-out project.
    </p>
    <p className="centered-text">
      If you’re looking for design and build contractors known for their
      wide-ranging experience, exemplary client satisfaction and superior
      quality results, look no further. Whatever your design or construction
      project, our dental, medical, commercial or residential teams will be
      there to assist you. Our dedicated site teams work closely with the best
      subcontractors in their field, including designers, architects and
      consultants.
    </p>
    <p className="centered-text">
      At SBS, our project management service can cover the entire design and
      build, so we’re there with you from beginning to end. We’ll listen to your
      requirements and provide a full concept and interior design, before taking
      care of the construction work. Our careful and comprehensive project
      management throughout the entire process enables us to deliver
      high-quality projects on time and on budget, every time.
    </p>
    <SectionHomeGallery className="Home">
      <Image image="1.jpg" />
      <Image image="2.jpg" />
      <Image image="3.jpg" />
      <Image image="4.jpg" />
      <Image image="5.jpg" />
      <Image image="6.jpg" />
      <Image image="7.jpg" />
      <Image image="8.jpg" />
      <Image image="9.jpg" />
      <Image image="10.jpg" />
    </SectionHomeGallery>

    <section>
      <Testimonials
        testimonials={[
          { title: "TitRandom title", quote: "Random Quote" },
          { title: "More Title", quote: "More Quote" }
        ]}
      />
    </section>
  </Layout>
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
