import React, { useState } from "react"

function ItemOverlay({ state, title, img }) {
  return (
    <div style={state} className="overlay">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div style={{ textAlign: "center" }}>
        {" "}
        <img
          style={{
            width: "25%",
            margin: "auto",
            boxShadow: "0px 0px 20px",
          }}
          src={img}
          alt=""
        />
      </div>
    </div>
  )
}

export default ItemOverlay
