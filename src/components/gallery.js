import React, { useEffect } from "react"
import { useState, useRef } from "react";
import "./gallery.css"
import noise from "./images/noise.webp"
import final from "./images/final.webp"
import arms from "./images/arms.webp"
import bordaux from "./images/bordeaux.webp"
import buffoonType from "./images/buffoontype.webp"
import covid from "./images/covid.webp"
import dance from "./images/dance.webp"
import devil from "./images/devil.webp"
import fallFest from "./images/fallFest.webp"
import laura from "./images/laura.webp"
import leopard from "./images/leopard.webp"
import luna from "./images/luna.webp"
import performance from "./images/performance.webp"
import red from "./images/red.webp"
import shower from "./images/shower.webp"
import telephone from "./images/telephone.webp"
import twisty from "./images/twisty.webp"
import wallpaper from "./images/wallpaper.webp"
import whereAreYou from "./images/whereAreYou.webp"
import woodDevil from "./images/woodDevil.webp"
import eyeCandy from "./images/eyeCandy.mp4"
import nameVideo from "./images/nameVideo.mp4"
import trippy from "./images/trippy.mp4"
import watchingWords from "./images/watchingWords.mp4"
import openWide from "./images/openWide.webp";
import kingJames from "./images/kjmm.webp";
import nfgBlockParty from "./images/nfgBlockParty.png";
import radioEditPoster from "./images/radioEditPoster.png";
import internetFriendsPoster from "./images/internetFriendsPoster.png";

export default function Gallery() {
    const images = [
        { src: internetFriendsPoster, alt: "", className: "", title: "Internet Friends EP Release Party AD", date: "2024", description: "Poster created for a client's party/concert.", type: "design" },
        { src: nfgBlockParty, alt: "", className: "", title: "N.F.G. Block Party Poster", date: "2024", description: "Poster created for a local band.", type: "design" },
        { src: radioEditPoster, alt: "", className: "", title: "Radio Edit Concert Poster", date: "2023", description: "Poster created for a client's event.", type: "design" },
        { src: kingJames, alt: "", className: "", title: "King James & His Mullberry Album Cover", date: "2023", description: "Album cover created for a local punk band.", type: "design" },
    { src: noise, alt: "", className: "", title: "Noise Between Static Album Cover", date: "2021", description: "Freelance album cover created for artist Bradley CD.", type: "design" }, 
    { src: final, alt: "", className: "", type: "design",  title: "The Final Broadcast Single Artwork", date: "2021", description: "Freelance single artwork created for artist Bradley CD.", type: "design" },
    { src: arms, alt: "", className: "", date:'2019', title: 'Intaglio Prints pt. 1', type: "illustration" },
    { src: twisty, alt: "", className: "", title: "Intaglio Prints pt. 2", date: "2019", description: "", type: "illustration"  },
    { src: bordaux, alt: "", className: "",title: "Bordeaux", type: "design", date: "2019", description: "Product design concept for fancy chocolate brand." }, { src: covid, alt: "", className: "", title: "Subway", date: "2020", type: "illustration"},
    { src: dance, title: "Dance Nation", date: "2020", alt: "", className: "", type: "design" },
    { src: devil, alt: "", className: "", title: "Me & The Devil", date: "2019", description: "", type: "design" },
    { src: fallFest, alt: "", className: "", title: "Fall Fest", date: "2020", description: "", type: "design" },
    { src: openWide, alt: "", className: "", title: "Open Wide", date: "2020", description: "", type: "design" },
    { src: laura, alt: "", className: "", title: "Laura's Cage Free Eggs", date: "2019", description: "Product design consept for cage free eggs.", type: "design" },
    { src: leopard, alt: "", className: "", title: "Leopard Skin Poster", date: "2019", description: "", type: "design" },
    { src: luna, alt: "", className: "", title: "Luna Park Amusement Park Poster", date: "2020", description: "", type: "design" },
    { src: performance, alt: "", className: "", title: "Performance Lab Poster", date: "2020", description: "", type: "design" },
    { src: red, alt: "", className: "", title: "Wear a Mask", date: "2020", description: "", type: "design" },
    { src: shower, alt: "", className: "", title: "Shower Thoughts", date: "2018", description: "", type: "design" },
    { src: telephone, alt: "", className: "", title: "The Bald Face Chace", date: "2018", description: "", type: "illustration"  },
    { src: wallpaper, alt: "", className: "", title: "Dragon Wallpaper", date: "2021", description: "", type: "illustration"  },
    { src: whereAreYou, alt: "", className: "", title: "Where You At?", date: "2017", description: "", type: "illustration"  },
    { src: woodDevil, alt: "", className: "", title: "Welcome", date: "2019", description: "", type: "illustration"  }, 
    { src: buffoonType, alt: "", className: "", title: "Buffoonery Type", date: "2018", description: "Custom typeface created for typographic investigations.", type: "design" },
    { src: eyeCandy, alt: "", className: "", title: "Eye Candy", date: "2019", description: "", type: "motion" },
    { src: nameVideo, alt: "", className: "", title: "The Name Game", date: "2020", description: "", type: "motion" },
    { src: trippy, alt: "", className: "", title: "Abstract Loop", date: "2019", description: "", type: "motion" },
    { src: watchingWords, alt: "", className: "", title: "Watching Words Move", date: "2019", description: "", type: "motion" }];
    const [imageType, setImageType] = useState("all");
    const [stickyClass, setStickyClass] = useState('relative');
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showPopUp, setShowPopUp] = useState(false);
    // const [height, setHeight] = useState(0)
    // const ref = useRef(null);

    useEffect(() => {
        setStickyClass('relative')
        // window.addEventListener('scroll', stickNavbar);
        // return () => {
        //     window.removeEventListener('scroll', stickNavbar);
        // };
    }, []);

    const stickNavbar = () => {

        // if (window !== undefined) {
        // let windowHeight = window.scrollY;
        // windowHeight > window.innerHeight && windowHeight < height ? setStickyClass('galleryHeader') : setStickyClass('relative');
        // }

    };
    const openImage = () => {

    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                nextImg();
            } else if (event.key === 'ArrowLeft') {
                prevImg();
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [photoIndex]); // Re-run the effect when `photoIndex` changes

    const showPopUpWithIndex = (index) => {
        setPhotoIndex(index);
        setShowPopUp(true);
    }

    const nextImg = () => {
        if (images.length != photoIndex + 1) {
            setPhotoIndex(photoIndex + 1);
        }
    }

    const prevImg = () => {
        if (photoIndex != 0) {
            setPhotoIndex(photoIndex - 1);
        }
    }




    return (
        <section id="gallery">
            <div className="spacer">
                <div className={`headerStyling ${stickyClass}`}>
                    <h1>My Work</h1>
                    <div className="selector">
                        <a className={imageType === "all" ? "selected" : ""} href="javascript:void(0);" onClick={() => setImageType("all")}>All</a>
                        <a className={imageType === "design" ? "selected" : ""}  href="javascript:void(0);" onClick={() => setImageType("design")}>Design</a>
                        <a className={imageType === "illustration" ? "selected" : ""}  href="javascript:void(0);" onClick={() => setImageType("illustration")}>Illustration</a>
                        <a className={imageType === "motion" ? "selected" : ""}  href="javascript:void(0);" onClick={() => setImageType("motion")}>Motion</a>
                    </div>
                </div>
            </div>

            <div className="allPhotos">
                <ul className="photos">
                    {
                        images.map((img, i) => {
                            if (imageType === "all" || imageType == img.type) {
                                if (img.type == "motion") {
                                    return (
                                        <li className="photoItem" key={i} onClick={() => showPopUpWithIndex(i)}>
                                            <video
                                                controls
                                                webkit-playsinline playsinline
                                                src={img.src}
                                                alt={img.alt}
                                                className={img.type}
                                                placeholder="blurred"
                                                layout="fixed"
                                                autoPlay muted loop
                                            />
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li className="photoItem" key={i} onClick={() => showPopUpWithIndex(i)}>
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

                            }

                        })
                    }
                    <li></li>
                </ul>
            </div>
            <div className='fullGallery' style={{ display: showPopUp ? 'block' : 'none' }}>
                <div className="clickableBackground" onClick={() => setShowPopUp(false)}>

                </div>
                <div className="close"></div>
                {
                    images.map((img, i) => {
                        if (i === photoIndex && (imageType === "all" || imageType == img.type)) {
                            const content = img.type == "motion" ? <video
                                controls
                                webkit-playsinline playsinline
                                src={img.src}
                                alt={img.alt}
                                className={img.type}
                                placeholder="blurred"
                                layout="fixed"
                                autoPlay muted loop
                            /> : <img
                                src={img.src}
                                alt={img.alt}
                                className={img.type}
                                placeholder="blurred"
                                layout="fixed"
                            />;
                            return (

                                <div className="fullSlide" key={i}>
                                    <div className="close"  onClick={() => setShowPopUp(false)}>&#x2715;</div>
                                    <div className="fullPhoto" >
                                        {content}
                                    </div>
                                    <div className="description">
                                        <h2>{img.title}</h2>
                                        <p>{img.date}</p>
                                        <p>{img.description}</p>
                                    </div>
                                    <div className="controls">
                                        <div onClick={() => { prevImg(); }} className="leftArrow"> <div>&#60;</div> </div>
                                        <div onClick={() => { nextImg(); }} className="rightArrow"> <div>&#62;</div> </div>
                                    </div>
                                </div>
                            );
                        }
                    })
                }
                
            </div>
        </section>
    )
}