import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PaintingItem from "./PaintingItem"

const PaintingSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTableau {
        edges {
          node {
            id
            price
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
        différents marketplaces pour vous les procurez.{" "}
      </p>
      <div className="row">
        {data.allContentfulTableau.edges.map(({ node }) => (
          <PaintingItem
            key={node.id}
            title={node.title}
            size={node.size}
            img={node.img.file.url}
            price={node.price}
          />
        ))}
      </div>
    </div>
  )
}

export default PaintingSection
