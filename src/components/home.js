import React from "react"
// import '../pages/index.css'
import Navbar from "./navbar.js"
import scrollTo from 'gatsby-plugin-smoothscroll';
import ContactBar from "./contactBar.js";
import "./home.css";

function NewlineText(props) {
    const text = props.text;
    return <div>{text}</div>;
}

const fullBackground = {
    height: "100vh",
    width: "100vw",
    whiteSpace: "pre-wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    justifyContent: "space-around"
}


const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

class Home extends React.Component {
    render() {
        return <div style={{height: "100vh"}}>
            <div className="columnReverse" style={fullBackground}>

                <div className="contactHome">
                    <h1 className="introText">
                        Hi I'm Jordan
                    </h1>
                    <ContactBar />
                </div>
                
                <button href="javascript:void(0);" onClick={() => scrollTo("#gallery")} className="btn callToAction">
                    See My Work <i className="arrow right"></i>
                </button>
                
            </div>
            <Navbar />
            <img></img>
        </div>
    }

}

export default Home;