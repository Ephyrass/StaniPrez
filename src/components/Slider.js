import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import nuit from "../images/nuit.jpg"
import spirales from "../images/spiralesII.jpg"
import biorythmes from "../images/biorythmes.jpg"

const Slider = () => {
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
          <img src={spirales} alt="Tableaux nommé Spirale 2" />
          <img src={nuit} alt="Tableaux nommé Nuit" />
          <img src={biorythmes} alt="Tableaux nommé Biorythmes" />
        </Carousel>
        <br />
        <Carousel autoPlay={7500} animationSpeed={3000} infinite>
          <h3>Spirale II</h3>
          <h3>Nuit Étoilé</h3>
          <h3>Biorythmes</h3>
        </Carousel>
      </div>
    </div>
  )
}
export default Slider
