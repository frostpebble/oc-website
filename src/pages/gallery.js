import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Gallery = ({ data }) => {
  var fullImage;
  var showFullview = true;
  function fullview(image) {
    console.log("fullview");
    fullImage = image;
    showFullview = true;
  }

  return (
  <Layout>
    <Masonry className="showcase">
      {data.commissions.edges.map(({ node: comm }) => (
        <div key={comm.id} className="showcase__item">
          <figure className="card">
{/*             <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link> */}
{/*             <div className="card__image" onClick={() => {fullview(comm.fluid)}}>
              <Img fluid={comm.fluid} />
            </div> */}
            <a href={comm.url} target="_blank">
            <div className="card__image">
              <Img fluid={comm.fluid} />
            </div>
            </a>
            <figcaption className="card__caption">
{/*               <h6 className="card__title">
                <Link to={comm.notes}>Artist: {comm.author}</Link>
              </h6> */}
              <div className="card__description">
              <a href={comm.notes}>Artist: {comm.author}</a>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
      { (fullImage && showFullview) && <div className="image__full">
        <Img fluid={fullImage} />
        image goes here
      </div> }
    </Masonry>
  </Layout>
)}

export default Gallery



export const query = graphql`
  query GalleryQuery {
    commissions: allDatoCmsAsset(filter: { tags: { in: "commission" } }) {
      edges {
        node {
          id
          author
          tags
          url
          notes
          fluid(maxWidth: 1000, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
`
