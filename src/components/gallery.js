import React, {useEffect} from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react";
import "./gallery.css"

export default function Gallery() {
    const images = [{src: "../images/dog1.jpeg", alt:"dog", className: ""},{src: "../images/dog2.jpeg", alt:"dog", className: ""},{src: "../images/dog3.jpeg", alt:"dog", className: ""}, {src: "../images/dog1.jpeg", alt:"dog", className: ""},{src: "../images/dog2.jpeg", alt:"dog", className: ""},{src: "../images/dog3.jpeg", alt:"dog", className: ""}];
    const [imageType, setImageType] = useState("all");
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > window.innerHeight ? setStickyClass('galleryHeader') : setStickyClass('relative');
        }
    };


  return (
    <section id="gallery">
        <div className="spacer">
            <div className={`headerStyling ${stickyClass}`}>
                <h1>My Work</h1>
                <div className="selector">
                    <a style={{ color: 'black' }} href="javascript:void(0);" onClick={() =>setImageType("all")}>All</a>
                    <a style={{ color: 'black' }} href="javascript:void(0);" onClick={() =>setImageType("design")}>Design</a>
                    <a style={{ color: 'black' }} href="javascript:void(0);" onClick={() =>setImageType("illustration")}>Illustration</a>
                    <a style={{ color: 'black' }} href="javascript:void(0);" onClick={() =>setImageType("motion")}>Motion</a>
                </div>
            </div>
        </div>
        
      <div className="allPhotos">
        <ul className="photos">
            {
                images.map((img, i) => {
                    if(imageType === "all" || imageType == img.type){
                        return (
                            <li className="photoItem" key={i}>
                                {/* //<StaticImage */}
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={img.type}
                                    placeholder="blurred"
                                    layout="fixed"
                                    />
                            </li>
                        );
                    }
                    
                })               
            }
            <li></li> 
        </ul>

      </div>
    </section>
  )
}