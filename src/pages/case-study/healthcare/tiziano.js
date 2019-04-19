import React from 'react';
import { Image } from 'src/components/Image';
import Layout from 'src/components/Layout';
import SEO from 'src/components/seo';
import { LayoutContainer } from 'src/components/Layout/LayoutContainer';
import styled from 'styled-components';
import { GalleryWithThumbnail } from 'src/components/ImageGallery/GalleryWithThumbnail';
import Gallery from 'src/components/Home/Gallery';
import { PopupboxManager } from 'react-popupbox';
import { Lightbox } from 'src/components/Lightbox';

const ImageContainer = styled.div`
  width: 80%;
  padding: ${props =>
    props.pos === 'left' ? '0px 20px 20px 0' : '0px 0px 20px 20px'};
  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 0px;
  }
`;
const StyledArticle = styled.article`
  width: 80%;
  padding: ${props =>
    props.pos === 'left' ? '0px 20px 20px 0' : '0px 0px 20px 20px'};

  h1 {
    text-align: initial;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
  }
`;

class TizianoCaseStudy extends React.Component {
  onGalleryImageClick = id => {
    const { data } = this.props;

    PopupboxManager.open({
      content: (
        <GalleryWithThumbnail
          images={data.healhcareTizianoImages}
          gotoSlide={id}
        />
      ),
    });
  };

  render() {
    const { data } = this.props;
    return (
      <Layout page="Tiziano" headerTitle="Tiziano">
        <SEO title="Tiziano" />
        <LayoutContainer>
          <h1>Case study: Tiziano</h1>

          <article>
            <h2>Project Description</h2>
            <p>
              Structural Radiation Shielding We install structural radiation
              shielding to OPG Rooms, CT Scanner Rooms and to walls within
              surgeries where X Rays are taken to shield operators from
              radiation. All our works are tested by the Health Protection
              Agency (HPA) to make sure we create functional and safe Dental
              Interior space CQC & HTM Advisory Service Due to our vast
              experience as medical building contractors within the dental and
              medical practice design and refurbishment field, we are able to
              advise our clients through the design stage to ensure that all the
              room layouts and equipment installations comply with CQC and HTM
              regulations, to either best practice or CQC essential requirement
              guidelines.
            </p>
            <p>&nbsp;</p>
          </article>
          <section>
            <h1 style={{ textAlign: 'center' }}>Case study gallery</h1>
            <Gallery
              images={data.healhcareTizianoImages}
              onGalleryImageClick={this.onGalleryImageClick}
            />
          </section>
          <Lightbox />
        </LayoutContainer>
      </Layout>
    );
  }
}

export default TizianoCaseStudy;

export const query = graphql`
  query tizianoQuery {
    healhcareTizianoImages: allFile(
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
`;
