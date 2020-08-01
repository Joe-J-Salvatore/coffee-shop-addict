import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getCategories = items => {
  let fullList = items.map(items => {
    return items.node.category
  })
  let setList = new Set(fullList)
  let catArray = Array.from(setList)
  catArray = ["all", ...catArray]
  return catArray
}

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCoffeeAddictItem {
        edges {
          node {
            title
            price
            description
            id
            image {
              fixed(width: 50, height: 50) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
            category
          }
        }
      }
    }
  `)

  const [items, setItems] = useState(data.allContentfulCoffeeAddictItem.edges)

  const handleClick = category => {
    let allItems = data.allContentfulCoffeeAddictItem.edges
    if (category === "all") {
      setItems(allItems)
    } else {
      let filteredItems = allItems.filter(({ node }) => {
        return node.category === category
      })
      setItems(filteredItems)
    }
  }

  const renderedListItems = items.map(({ node }) => {
    return (
      <div key={node.id} className="col-11 col-md-6 d-flex mx-auto my-2">
        <div>
          <Img fixed={node.image.fixed} />
        </div>
        <div className="flex-grow-1 px-3">
          <div className="d-flex justify-content-between">
            <h6 className="mb-0">
              <small>{node.title}</small>
            </h6>
            <h6 className="mb-0 text-yellow">
              <small>${node.price}</small>
            </h6>
          </div>
          <p className="text-muted">
            <small>{node.description}</small>
          </p>
        </div>
      </div>
    )
  })

  const result = getCategories(data.allContentfulCoffeeAddictItem.edges)

  return (
    <section className="menu py-5">
      <div className="container">
        <h1 className="text-capitalize font-weight-bold text-center mb-5">
          best of our menu
        </h1>
        <div className="row mb-5">
          <div className="col-10  mx-auto text-center">
            {result.map((category, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => handleClick(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
        <div className="row">{renderedListItems}</div>
      </div>
    </section>
  )
}

export default Menu
