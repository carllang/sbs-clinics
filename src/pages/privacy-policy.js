import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';

const PrivacyPolicy = ({ data }) => {
  console.log(data);
  return (
    <Layout page="privacy-policy" headerTitle="Privacy Policy">
      <SEO title="Privacy Policy" />
      <LayoutContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.frontmatter.title,
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        />
      </LayoutContainer>
    </Layout>
  );
};

export default PrivacyPolicy;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/privacy-policy/" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
