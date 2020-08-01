import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/section"
import Menu from "../components/menu"
import Products from "../components/Products"
import Contact from "../components/Contact"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={props.data.file.childImageSharp.fluid}
      title="coffee addict"
      className="default-background"
    />
    <Info title="our story" />
    <Menu />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
