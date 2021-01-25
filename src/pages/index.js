import React from "react"
import SEO from "../components/shared/seo/seo"
import Layout from "../hoc//layout/layout"
import Intro from "../components/index/intro/intro"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Evolutio Consulting" description="" />
      <Intro />
    </Layout>
  )
}

export default IndexPage
