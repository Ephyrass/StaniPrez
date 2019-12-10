import React from "react"
import ItemPartner from "./ItemPartner"
import { useStaticQuery, graphql } from "gatsby"

function PartnerSection() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPartenaire {
        edges {
          node {
            id
            description
            title
            linkPartner
            imagePartenaire {
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
    <div style={{ backgroundColor: "lightgray", paddingBottom: "5%" }}>
      <div className="container" id="partner">
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
          PARTENAIRES
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
          Vous pouvez ici découvrir tous mes partenaires.
        </p>

        <div className="row">
          {data.allContentfulPartenaire.edges.map(({ node }) => (
            <ItemPartner
              key={node.id}
              title={node.title}
              img={node.imagePartenaire.file.url}
              description={node.description}
              link={node.linkPartner}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerSection
