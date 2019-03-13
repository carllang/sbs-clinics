import React from "react";
import Layout from "src/components/Layout";
import SEO from "src/components/seo";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";

const Sectors = ({ data }) => {
  return (
    <Layout page="sectors" headerTitle="Sectors">
      <SEO title="Sectors" />
      <LayoutContainer>
        <h1>Sectors</h1>
        <p>
          Welcome to Smart Building Solutions (SBS). We are a diverse and
          dynamic construction company specialising in bespoke tailor made
          solutions at affordable rates. Whether you are residential or
          commercial we offer a unique range of services to meet your
          expectations.
        </p>
        <p>
          Unlike our competitors we provide cost effective results that save you
          time and most importantly money, allowing you to focus on your own
          goals.
        </p>
        <p>
          We source all of our products and materials from a vast array of
          suppliers who are based within the UK and in Europe ensuring you
          receive the finest quality for the lowest possible price.
        </p>
        <p>
          Our team consists of expert tradesmen and professionals who ensure
          exceptional delivery for all your building and construction needs.
          Give us a call or drop us a line for a friendly consultation.
        </p>
      </LayoutContainer>
    </Layout>
  );
};

export default Sectors;

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
