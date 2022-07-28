import React from "react"
// import '../pages/index.css'
import Navbar from "./navbar.js"
import scrollTo from 'gatsby-plugin-smoothscroll';

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
    backgroundColor: "black"

}


const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

class Home extends React.Component {
    render() {
        return <div style={fullBackground}>

            <h1 className="introText">
                Hi I'm Jordan
            </h1>
            <img></img>
            <button href="javascript:void(0);" onClick={() => scrollTo("#work")} className="btn callToAction">
                See My Work <i class="arrow right"></i>
            </button>


            <Navbar />
        </div>
    }

}

export default Home;