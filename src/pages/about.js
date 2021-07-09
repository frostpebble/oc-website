import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'

const About = ({ data: { about } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{about.title}</h1>
        <div className="sheet__body" />
        <ReactMarkdown className="sheet__body">{about.bio}</ReactMarkdown>
        <p className="sheet__body"><h3>A crash course into the plot</h3></p>
        <ReactMarkdown className="sheet__body">{about.storySummary}</ReactMarkdown>
      </div>
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      bio
      storySummary
    }
  }
`
