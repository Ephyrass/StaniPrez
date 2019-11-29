import React, { useState } from "react"
import ItemOverlay from "./ItemOverlay"

function PaintingItem({ img, title, size, price }) {
  const [color, setColor] = useState({ display: "none", color: "red" })
  const [div, setDiv] = useState({ display: "block" })

  const handleClickOn = () => {
    setColor({ display: "block" })
    setDiv({ display: "block" })
  }
  const handleClickOff = () => {
    setDiv({ display: "none" })
  }

  return (
    <div className="col-md-6 col-lg-3 col-sm-6">
      <div>
        <div style={{ textAlign: "center" }}>
          <img
            className="painting"
            style={{
              height: "200px",
              width: "200px",
              margin: "auto",
              boxShadow: "0px 0px 20px",
            }}
            src={img}
            alt={title}
            onClick={() => handleClickOn()}
          />
        </div>

        <h4 style={{ textAlign: "center", paddingTop: "5%" }}>{title}</h4>
        <div style={div} onClick={() => handleClickOff()}>
          <ItemOverlay state={color} title={title} img={img} />
        </div>
        <p style={{ textAlign: "center" }}>{size}</p>
        <p style={{ textAlign: "center" }}>{price} €</p>
      </div>
    </div>
  )
}

export default PaintingItem
