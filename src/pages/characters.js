import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'

const Characters = ({ data}) => (
  <Layout>
    <article className="sheet">
    <div className="sheet__inner">
        <h1 className="sheet__title">Characters</h1>
        <div className="sheet__body">
          {data.allDatoCmsCharacter.edges.map(({ node: char }) => (
          <div className="character__container">
            <Img fluid={char.icon.fluid} className="character__icon" />
            <h2>{ char.name }</h2>
            <ReactMarkdown>{char.bio}</ReactMarkdown>
            <br/>
            <a href={char.toyhouseLink}>View on Toyhouse</a>
            <br/>
          </div>))}
        </div>
      </div>
    </article>
  </Layout>
)

export default Characters

export const query = graphql`
  query CharactersQuery {
    allDatoCmsCharacter {
      edges {
        node {
          name
          toyhouseLink
          bio
          icon {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`