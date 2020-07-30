import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/section"

const AboutPage = props => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={props.data.file.childImageSharp.fluid}
      title="about us"
      className="about-background"
    />
    <Info title="our story" />
  </Layout>
)
export const query = graphql`
  {
    file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
