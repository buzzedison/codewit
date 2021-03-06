import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, body, images, tags } = data.contentfulInsight
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <div className="blogHead" />
        <h2 className="container" id="content">
          {title}
        </h2>
        <center>
          {" "}
          <img
            alt={title}
            src={images.file.url}
            className="container"
            id="blogImg"
          />
        </center>

        <div
          className="container"
          id="content"
          dangerouslySetInnerHTML={{
            __html: body.childContentfulRichText.html,
          }}
        />

        <Link to="/blog" className="container" id="content">
          Back to Insight/Blog
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulInsight(slug: { eq: $slug }) {
      title
      slug

      images {
        file {
          url
        }
      }

      body {
        json
      }
    }
  }
`
