import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import ReactMarkdown from 'react-markdown'

const Story = ({data}) => (
<Layout>
    <article className="sheet">
    <div className="sheet__inner">
        <h1 className="sheet__title">Story</h1>
        <div className="sheet__body">
          <h2>Main Chapters</h2>
          {data.chapters.edges.map(({ node: entry }) => (
          <div>
            { entry.description && 
            <div><h4><Link to={`/story/${entry.slug}`}>
              {entry.ordered && <span>{entry.orderNumber}. </span>}{ entry.title }{ entry.nsfw && <span role="img" aria-label="18+">&#128286;</span> }
            </Link></h4>
            <ReactMarkdown>{ entry.description }</ReactMarkdown></div>}
            { !entry.description && 
            <div><h4>
              { entry.title }
            </h4></div>}
          </div>))}
          <h2>Oneshots</h2>
          {data.oneshots.edges.map(({ node: entry }) => (
          <div>
            <h4><Link to={`/story/${entry.slug}`}>{ entry.title }{ entry.nsfw && <span role="img" aria-label="18+">&#128286;</span> }</Link></h4>
            <ReactMarkdown>{ entry.description }</ReactMarkdown>
          </div>))}
        </div>
      </div>
    </article>
  </Layout>
)

export default Story

export const query = graphql`
  query StoryQuery {
    chapters: allDatoCmsStory(sort: { fields: [orderNumber], order: ASC }, filter: {group: {eq: "main"}}) {
      edges {
        node {
          title
          description
          group
          ordered
          orderNumber
          nsfw
          slug
        }
      }
    },
    oneshots: allDatoCmsStory(sort: { fields: [orderNumber], order: ASC }, filter: {group: {eq: "oneshot"}}) {
      edges {
        node {
          title
          description
          group
          orderNumber
          nsfw
          slug
        }
      }
    }
  }
`