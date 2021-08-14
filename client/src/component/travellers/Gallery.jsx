import React, { useState, useEffect } from "react";
import "./gallery.css";
import Main from "../common/Main";

import img1 from "../../image/gallery/gallery.png"
function Gallery() {
  const [imageapi, setImageapi] = useState([])
  document.title = "GALLERY";
  const getdata = async () => {
    try {
      // console.log('enter getdata')
      const response = await fetch('/upload/api')

      const apidata = await response.json()

      // console.log(apidata[0] + '  response')

      return setImageapi(apidata)
      // console.log(imageapi)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <Main img={img1} content="This is our Image gallery ,Everything from our Trip will be  posted here.Watch every amazing images taken by our photographer  here." />
      <div id="gallery" className="container-fluid">
        {imageapi.map((value, index) => {
          return (
            <div className="img-responsive" key={index}>
              <a href={value.imageurl} target="_top">
                <img src={value.imageurl} alt="travel" />
              </a>
              <span className="imgdetail fonts nav-title">
                Photo Taken On -{value.imagedate} | place:{value.placename} | country:{value.statename}

              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
