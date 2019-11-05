import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SBSImage = props => (
  <StaticQuery
    query={graphql`
      query {
        sbsImages: allFile(
          filter: { sourceInstanceName: { eq: "healthcareTiziano" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 5000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.sbsImages.edges.find(n => {
        return n.node.relativePath.includes(props.image);
      });
      if (!image) {
        return null;
      }
      const imageSizes = image.node.childImageSharp.sizes;
      return <Img {...props} sizes={imageSizes} fadeIn />;
    }}
  />
);

export default SBSImage;
