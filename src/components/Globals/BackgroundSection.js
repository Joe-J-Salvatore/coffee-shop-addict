import React from "react"
//import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const BackgroundSection = ({
  img,
  className = "default-background",
  title = "default-title",
}) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     file(relativePath: { eq: "default-background.jpeg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `)
  //const imageData = data.file.childImageSharp.fluid
  return (
    <BackgroundImage fluid={img} className={className}>
      <h1 className="title text-white text-uppercase  text-center display-4 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}
export default BackgroundSection
