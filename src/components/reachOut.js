import React from "react"
import "./reachOut.css";
import ContactBar from "./contactBar.js";


const fullBackground = {
  width: "100vw",
  whiteSpace: "pre-wrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  justifyContent: "space-around",
  color: "white",
  paddingBottom: "2em",
  flexDirection: "column",
}

export default function ReachOut() {
  return (
    <section id="reachOut">
      <div className="splitScreen" style={fullBackground}>
        <div>
        <h1 className="introText">
                Reach Out and say hi!
            </h1>
            <ContactBar />
        </div>
      </div>
      
    </section>
  )
}

