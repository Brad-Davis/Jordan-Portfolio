
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby";
import "./navbar.css"

const navbar = {
    position: "absolute !important",
    display: "block !important",
    fontSize: "1.5em",
    bottom: "20px",
    width: "100%",
    left: "50%",
    bottom: "20px",
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
                <li><a style={{ color: 'white' }} href="javascript:void(0);" onClick={() => scrollTo("#work")}>Work</a></li>
                <li><a style={{ color: 'white' }} href="javascript:void(0);" onClick={() => scrollTo("#about")}>About</a></li>
                {/* <a href="#projects">Projects</a>/ */}
                <li><a style={{ color: 'white' }} href="javascript:void(0);" onClick={() => scrollTo("#contact")}>Contact</a></li>
                <li><Link style={{ color: 'white' }} to="/blog">Blog</Link></li>
                {/* <li><a href="/blog">Blog</a></li> */}
            </ul>
        </div>
    }

}

export default Navbar;