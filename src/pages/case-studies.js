import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const CaseStudies = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Page two" />
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
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default CaseStudies;

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
