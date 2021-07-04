import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Characters = ({ data}) => (
  <Layout>
    <article className="sheet">
    <div className="sheet__inner">
        <h1 className="sheet__title">Characters</h1>
        {data.allDatoCmsCharacter.edges.map(({ node: char }) => (
        <div>
          <h3>{ char.name }</h3>
            <p>       
              <a href={char.toyhouseLink}>View on toyhou.se</a>
            </p>
        </div>
      ))}
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
        }
      }
    }
  }
`