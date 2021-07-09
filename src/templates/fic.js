import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.fic.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.fic.title}</h1>
        <p className="sheet__lead">written by: {data.fic.author}</p>
        <ReactMarkdown className="sheet__body">{data.fic.mainText}</ReactMarkdown>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query FicQuery($slug: String!) {
    fic: datoCmsStory(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      author
      description
      mainText
    }
  }
`
