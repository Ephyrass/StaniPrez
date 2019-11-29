import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import ArrowDown from "../components/ArrowDown"
import About from "../components/About"
import PaintingSection from "../components/Gallerie/PaintingSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Acceuil" />
      <Slider />
      <ArrowDown />
      <About />
      <PaintingSection />
    </Layout>
  )
}

export default IndexPage
