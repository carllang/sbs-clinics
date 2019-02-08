import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const Sectors = ({ data }) => {
  return (
    <Layout>
      <SEO title="Sectors" />
      <h1>Wordpress date: {data.allWordpressPage.edges[0].node.date}</h1>
      <h1>Wordpress title: {data.allWordpressPage.edges[0].node.title}</h1>
      <p>{data.allWordpressPage.edges[0].node.content}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Sectors;

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
