import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const HomePage = ({ data: { home } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={home.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{home.title}</h1>
        <p className="sheet__lead">{home.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={home.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: home.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default HomePage

export const query = graphql`
  query HomeQuery {
    home: datoCmsHomePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
