import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopNavigation from "../components/topnavigation"
import Content from "../components/content"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopNavigation />
    <h1>Hey there 🖐!!</h1>
    <h1>I'm Priya Ranjan...</h1>
    <p>A young passionate full-stack <br/> developer👨‍💻 &amp; designer 🎨;</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
