import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <h1
        dangerouslySetInnerHTML={{
          __html: data.allWordpressPage.edges[0].node.title
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: data.allWordpressPage.edges[0].node.content
        }}
      />
    </Layout>
  );
};

export default About;

export const query = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          status
          date
          content
        }
      }
    }
  }
`;
