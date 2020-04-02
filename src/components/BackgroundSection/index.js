// import React from 'react';
// import { graphql, StaticQuery } from 'gatsby';
// import styled from 'styled-components';

// import BackgroundImage from 'gatsby-background-image';

// const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query backgroundImage {
//         images: allFile(
//           filter: { name: { regex: "/webtreats_wood-pattern8-1024/" } }
//         ) {
//           childImageSharp {
//             sizes(maxWidth: 5000) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.images.edges[0].node;
//       console.log(imageData);
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor="#040e18"
//           style={{ width: '100%', height: '200px' }}
//         >
//           <h1>Hello gatsby-background-image</h1>
//         </BackgroundImage>
//       );
//     }}
//   />
// );

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
