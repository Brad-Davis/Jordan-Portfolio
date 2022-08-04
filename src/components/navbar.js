
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby";
import "./navbar.css"

const navbar = {
    position: "absolute !important",
    display: "block !important",
    fontSize: "1.5em",
    width: "100%",
    left: "50%",
    bottom: "1em",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
    textAlign: "center",
    margin: "0 auto",
    overflow: "auto",
    clear: "both",
    color: "white",
}


class Navbar extends React.Component {
    render() {
        return <div>
            <ul style={navbar} >
                <li><a style={{ color: 'white' }} href="javascript:void(0);" onClick={() => scrollTo("#work")}>My Work</a></li>
                <li><a style={{ color: 'white' }} href="javascript:void(0);" onClick={() => scrollTo("#about")}>About Me</a></li>
                {/* <a href="#projects">Projects</a>/ */}
                <li><a style={{ color: 'white' }} href="javascript:void(0);" onClick={() => scrollTo("#contact")}>Reach Out</a></li>
            </ul>
        </div>
    }

}

export default Navbar;