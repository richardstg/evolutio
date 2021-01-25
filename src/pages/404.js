import React from "react"

import Layout from "../hoc/layout/layout"
import SEO from "../components/shared/seo/seo"
import NotFound from "../components/404/notFound"

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="404" description="Page not found." />
      <NotFound />
    </Layout>
  )
}

export default PageNotFound
