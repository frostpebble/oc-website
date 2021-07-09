import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'

const World = ({ data: { world } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={world.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{world.title}</h1>
        <div className="sheet__body">
        <ReactMarkdown className="sheet__body">{world.worldbuilding}</ReactMarkdown>
        </div>
      </div>
    </article>
  </Layout>
)

export default World

export const query = graphql`
  query WorldQuery {
    world: datoCmsWorldPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      worldbuilding
    }
  }
`
