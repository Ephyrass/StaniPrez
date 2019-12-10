import React from "react"

function Contact() {
  return (
    <div
      style={{ textAlign: "center", fontSize: "32px", fontFamily: "Roboto" }}
      className="contact"
      id="contact"
    >
      <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          fontFamily: "Oswald",
          fontWeight: "500",
          paddingBottom: "2%",
          paddingTop: "2%",
        }}
      >
        CONTACT
      </h2>
      <p>Domaine de Curiège</p>
      <p>11270 La Cassaigne</p>
      <p>France</p>
      <p>contact@staniprez.com</p>
    </div>
  )
}

export default Contact
