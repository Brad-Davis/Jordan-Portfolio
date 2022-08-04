import React, { Component } from 'react'
import Email from './icons/email';
import IconHolder from './icons/iconHolder';
import Instagram from './icons/instagram';
import LinkedIn from './icons/linkedIn';
 
const barStyle = {
    width: "100%",
    height: "3em",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-0.5em"
}

class ContactBar extends Component {
    render() {
        return (
            <div style={barStyle}>
                <IconHolder>
                    <Instagram />
                </IconHolder>
                <IconHolder>
                    <Email />
                </IconHolder>
                <IconHolder>
                    <LinkedIn />
                </IconHolder>
            </div>
        )
    }
}
 
export default ContactBar;  