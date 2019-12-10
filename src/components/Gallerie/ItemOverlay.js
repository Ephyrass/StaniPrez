import React, { useState } from "react"
import etsy from "../../images/etsy.png"
import lbc from "../../images/lbc.png"
import aliexpress from "../../images/aliexpress.png"
import cross from "../../images/cross.svg"

function ItemOverlay({
  linkEtsy,
  linkAliexpress,
  linklbc,
  state,
  title,
  img,
  size,
  price,
  cadrePrice,
}) {
  return (
    <div className="overlay">
      <div style={{ display: "none" }} className="over">
        <img
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
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <div
              style={{
                textAlign: "center",
                paddingTop: "10%",
              }}
            >
              {" "}
              <img
                style={{
                  width: "80%",
                  position: "relative",
                  top: "50%",
                  boxShadow: "0px 0px 20px",
                }}
                src={img}
                alt=""
              />
            </div>
          </div>
          <div style={{ width: "50%", paddingTop: "15%" }}>
            {" "}
            <h3 style={{ textAlign: "center" }}>{title}</h3>
            <br />
            <p>
              Toile {size} <br />
              Type : Acrylique vernissé <br />
              Encadrement : Alu noir haute finition Nielsen
              <br />
              Accrochage : visible ou masqué ( 2 accroches métal ) <br />{" "}
              Certificat d'authenticité annexé au colis + tampon dos de la toile
              Emballage d'envoi : papier bulle + carton renforcé <br /> Prix
              avec encadrement: {cadrePrice} € <br />
              Prix sans encadrement : {price} €
            </p>
            <div className="marketIcon">
              <p>
                Vous pouvez acheter ce tableau en cliquant sur l'une des trois
                icones de Marketplace ou en me contactant via la section
                "contact" du site.
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
  )
}

export default ItemOverlay
