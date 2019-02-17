import React from "react";
import Layout from "src/components/Layout";
import SEO from "src/components/seo";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";

const CaseStudies = ({ data }) => {
  return (
    <Layout page="case-studies">
      <SEO title="Case Studies" />
      <LayoutContainer>
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
      </LayoutContainer>
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
