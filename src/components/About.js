import React from "react"
import Stani from "../images/Stani.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <p>
          “ Je suis tombé amoureux d’un petit coin de nature dans une belle
          vallée de l’Aude... <br /> <br />
          Je peux enfin y exprimer mon désir de transmettre ma vision des choses
          à travers cet art majeur qu’est la peinture abstraite. <br />{" "}
          Observateur des merveilles naturelles, rempli d’un désir d’empathie
          avec des gens près de la terre, je prends plaisir à communiquer avec
          mon art tout en réalisant mon rêve profond... ”
        </p>
        <p
          style={{
            fontFamily: "Raleway, Sans Serif",
            color: "black",
            textAlign: "right",
            fontSize: "24px",
          }}
        >
          Stani Prez
        </p>

        <img style={{ width: "50%" }} src={Stani} alt="Peintre Stani Prez" />
      </div>
    </div>
  )
}

export default About
