import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import ArrowDown from "../components/ArrowDown"
import About from "../components/About"
import PaintingSection from "../components/Gallerie/PaintingSection"
import PartnerSection from "../components/Partner/PartnerSection"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Acceuil" />
      <Slider />
      <ArrowDown />
      <About />
      <PaintingSection />
      <PartnerSection />
      <Contact />
    </Layout>
  )
}

export default IndexPage
