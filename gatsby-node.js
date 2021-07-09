const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsStory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      });
      result.data.allDatoCmsStory.edges.map(({ node: fic }) => {
        createPage({
          path: `story/${fic.slug}`,
          component: path.resolve(`./src/templates/fic.js`),
          context: {
            slug: fic.slug,
          },
        })
      })
      resolve()
    })
  })
}
