import React from "react";
import imagedata from "./imagedata";
import "./gallery.css";
import Main from "../common/Main";

import img1 from "../../image/gallery/gallery.png"
function Gallery() {
  document.title = "GALLERY";
  return (
    <>
      <Main img={img1} content="This is our Image gallery ,Everything from our Trip will be  posted here.Watch every amazing images taken by our photographer  here." />
      <div id="gallery" className="container-fluid">
        {imagedata.map((value, index) => {
          return (
            <div className="img-responsive" key={index}>
              <a href={value.imagesrc} target="_top">
                <img src={value.imagesrc} alt="travel" />
              </a>
              <span className="imgdetail fonts nav-title">
                Date:{value.date} Description:{value.desc} country:{value.state}
                place:{value.place}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
