import React from "react";
import Layout from "src/components/Layout";
import SEO from "src/components/seo";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";

const PrivacyPolicy = ({ data }) => {
  return (
    <Layout page="privacy-policy" headerTitle="Privacy Policy">
      <SEO title="Privacy Policy" />
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

export default PrivacyPolicy;

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
