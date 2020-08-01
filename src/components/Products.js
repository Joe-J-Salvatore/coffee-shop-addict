import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCoffeeAddictProduct {
        edges {
          node {
            title
            price
            description
            id
            image {
              fluid(maxHeight: 426) {
                src
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const productList = data.allContentfulCoffeeAddictProduct.edges.map(
    ({ node }) => {
      return <Product key={node.id} product={node} />
    }
  )
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-capitalize text-uppercase text-center">
          Our Products
        </h1>
        <div className="row">{productList}</div>
      </div>
    </section>
  )
}

export default Products
