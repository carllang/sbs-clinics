import React from "react";
import Layout from "src/components/Layout";
import SEO from "src/components/seo";
import { LayoutContainer } from "src/components/Layout/LayoutContainer";

const NotFoundPage = () => (
  <Layout page="404" headerTitle="404">
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
  </Layout>
);

export default NotFoundPage;
