import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCarrousel {
        edges {
          node {
            title
            img {
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
    <div className="slider">
      <div
        style={{
          fontFamily: "Roboto",
          fontWeight: "500",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Carousel autoPlay={7500} animationSpeed={3000} infinite>
          {data.allContentfulCarrousel.edges.map(({ node }) => (
            <img key={node.id} src={node.img.file.url} alt={node.title} />
          ))}
        </Carousel>
        <br />
        <Carousel autoPlay={7500} animationSpeed={3000} infinite>
          {data.allContentfulCarrousel.edges.map(({ node }) => (
            <h3 key={node.id}>{node.title}</h3>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
export default Slider
