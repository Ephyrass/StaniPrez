import React from "react"
import arrowDown from "../images/arrowDown.svg"

const ArrowDown = () => {
  return (
    <div
      style={{
        minHeight: "10vh",
        position: "relative",
      }}
    >
      {" "}
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          left: "50%",
          cursor: "pointer",
        }}
      >
        <img
          onClick={e => console.log("click")}
          src={arrowDown}
          alt="Flèche vers le bas"
        />
      </div>
    </div>
  )
}

export default ArrowDown
