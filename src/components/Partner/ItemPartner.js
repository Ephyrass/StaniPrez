import React from "react"

function ItemPartner({ description, img, title, link }) {
  return (
    <div className="col-md-6 col-lg-4 col-sm-6">
      <div className="card">
        <div style={{ textAlign: "center" }}>
          <img className="card-img-top" src={img} alt={title} />
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ textAlign: "center", paddingTop: "5%" }}
          >
            {title}
          </h5>
          <p style={{ textAlign: "center" }} className="card-text">
            {description}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="btn btn-primary"
            style={{
              left: "50%",
              position: "relative",
              transform: "translateX(-50%)",
            }}
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  )
}

export default ItemPartner
