import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Story = () => (
  <Layout>
<article className="sheet">
    <div className="sheet__inner">
        <h1 className="sheet__title">Story</h1>
    </div>
    wouldn't it be cool if there was stuff here?
  </article>
  </Layout>
)

export default Story