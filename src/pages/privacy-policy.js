import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';

const PrivacyPolicy = () => {
  return (
    <Layout page="privacy-policy" headerTitle="Privacy Policy">
      <SEO title="Privacy Policy" />
      <LayoutContainer>Policy</LayoutContainer>
    </Layout>
  );
};

export default PrivacyPolicy;

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { frontmatter: { path: { regex: "/privacy-policy/" } } }
//     ) {
//       edges {
//         node {
//           html
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `;
