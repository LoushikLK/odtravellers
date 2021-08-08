import React from "react";
import imagedata from "./imagedata";
import "./gallery.css";

function Gallery() {
  document.title = "GALLERY";
  return (
    <>
      <h1 className="text-center d-block nav-title fonts fs-1">Gallery</h1>
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
