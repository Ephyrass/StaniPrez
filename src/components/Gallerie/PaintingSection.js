import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PaintingItem from "./PaintingItem"
import more from "../../images/more.svg"

const PaintingSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTableau {
        edges {
          node {
            id
            price
            cadrePrice
            size
            title

            img {
              id
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const [limit, setLimit] = useState(12)

  const handleclickLimit = () => {
    setLimit(limit + 8)
  }

  const allPaint = data.allContentfulTableau.edges.map(({ node }) => (
    <PaintingItem
      key={node.id}
      title={node.title}
      size={node.size}
      img={node.img.file.url}
      price={node.price}
      cadrePrice={node.cadrePrice}
    />
  ))
  console.log(allPaint)
  return (
    <div className="container" id="galerie">
      <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          fontFamily: "Oswald",
          fontWeight: "500",
          paddingBottom: "2%",
          paddingTop: "5%",
        }}
      >
        GALERIE
      </h2>
      <p
        style={{
          fontSize: "18px",
          fontFamily: "Lato",
          width: "60%",
          margin: "auto",
          textAlign: "center",
          paddingBottom: "5%",
        }}
      >
        Vous pouvez ici découvrir tous mes tableaux et cliquer sur les
        différents marketplaces pour vous les procurer.{" "}
      </p>
      <div className="row">{allPaint.slice(0, limit)}</div>
      <div className="load-more">
        <img onClick={() => handleclickLimit()} src={more} alt="" />
      </div>
    </div>
  )
}

export default PaintingSection
