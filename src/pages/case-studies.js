import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';

const CaseStudies = () => {
  return (
    <Layout page="case-studies" headerTitle="Our Work">
      <SEO title="Case Studies" />
      <LayoutContainer>
        {/* <h1
          dangerouslySetInnerHTML={{
            __html: data.allWordpressPage.edges[0].node.title
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: data.allWordpressPage.edges[0].node.content
          }}
        /> */}
        <h1>Case Studies</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </LayoutContainer>
    </Layout>
  );
};

export default CaseStudies;

// export const query = graphql`
//   query {
//     allWordpressPage {
//       edges {
//         node {
//           title
//           status
//           date
//           content
//         }
//       }
//     }
//   }
// `;
