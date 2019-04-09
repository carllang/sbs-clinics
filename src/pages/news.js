import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';

const News = () => {
  return (
    <Layout page="news" headerTitle="News">
      <SEO title="News" />
      <LayoutContainer>
        {/* {data.allMarkdownRemark.edges.map((edge, key) => {
          return (
            <div key={key}>
              <h2>{edge.node.frontmatter.title}</h2>

              <p>{edge.node.excerpt}</p>
            </div>
          );
        })} */}
        news
      </LayoutContainer>
    </Layout>
  );
};

export default News;

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           excerpt
//           headings {
//             value
//             depth
//           }
//           fileAbsolutePath
//           frontmatter {
//             title
//             path
//             date
//           }
//         }
//       }
//     }
//   }
// `;
