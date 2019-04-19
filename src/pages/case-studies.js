import React from 'react';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import CaseStudySection from 'src/components/CaseStudies/Section';

const CaseStudies = () => {
  return (
    <Layout page="case-studies" headerTitle="Case Studies">
      <SEO title="Case Studies" />
      <LayoutContainer>
        <CaseStudySection />
      </LayoutContainer>
    </Layout>
  );
};

export default CaseStudies;
