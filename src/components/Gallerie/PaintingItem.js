import React, { useState } from "react"
import etsy from "../../images/etsy.png"
import lbc from "../../images/lbc.png"
import aliexpress from "../../images/aliexpress.png"
import cross from "../../images/cross.svg"
import details from "../../doc/Détails encadrement Nielsen.pdf"

function PaintingItem({
  img,
  title,
  size,
  price,
  cadrePrice,
  linkAliexpress,
  linkEtsy,
  linklbc,
}) {
  const [overlay, setOverlay] = useState({ display: "none" })

  const overlayOn = () => {
    setOverlay({ display: "block" })
  }

  const overlayOff = () => {
    setOverlay({ display: "none" })
  }

  return (
    <div className="col-md-6 col-lg-4 col-sm-6 col-xl-3">
      <div>
        <div
          onClick={() => overlayOn()}
          style={{ height: "250px", textAlign: "center" }}
        >
          <img
            className="painting"
            style={{
              height: "100%",
              margin: "auto",
              boxShadow: "0px 0px 20px",
            }}
            src={img}
            alt={title}
          />
        </div>

        <h4 style={{ textAlign: "center", paddingTop: "5%" }}>{title}</h4>

        <div className="overlay" style={overlay}>
          <div>
            <img
              onClick={() => overlayOff()}
              style={{
                zIndex: "10",
                position: "absolute",
                top: "2%",
                right: "2%",
                cursor: "pointer",
                opacity: "0.8",
              }}
              src={cross}
              alt="just a cross to close the overlay"
            />
            <div className="overlay-container">
              <div className="paint-overlay">
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "10%",
                  }}
                >
                  {" "}
                  <img
                    style={{
                      maxWidth: "80%",
                      position: "relative",
                      top: "50%",
                      boxShadow: "0px 0px 20px",
                    }}
                    src={img}
                    alt=""
                  />
                </div>
              </div>
              <div className="para-overlay">
                {" "}
                <h3 style={{ textAlign: "center" }}>{title}</h3>
                <br />
                <p>
                  Toile {size} <br />
                  Type : Acrylique vernissé <br />
                  Encadrement : Alu noir haute finition Nielsen{" "}
                  <a href={details}>En savoir plus</a>
                  <br />
                  Accrochage : visible ou masqué ( 2 accroches métal ) <br />{" "}
                  Certificat d'authenticité annexé au colis + tampon dos de la
                  toile Emballage d'envoi : papier bulle + carton renforcé{" "}
                  <br /> Prix avec encadrement: {cadrePrice} € <br />
                  Prix sans encadrement : {price} €
                </p>
                <div className="marketIcon">
                  <p>
                    Vous pouvez acheter ce tableau en cliquant sur l'une des
                    trois icones de Marketplace ou en me contactant via la
                    section "contact" du site.
                  </p>
                  <a href={linkEtsy} target="_blank" rel="noopener noreferrer">
                    <img src={etsy} alt="icon Etsy" />
                  </a>
                  <a
                    href={linkAliexpress}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={aliexpress}
                      alt="icon Aliexpress"
                    />
                  </a>
                  <a href={linklbc} target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ height: "35px", width: "35px" }}
                      src={lbc}
                      alt="icon Leboncoin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", paddingBottom: "5%" }}>{size}</p>
      </div>
    </div>
  )
}

export default PaintingItem
