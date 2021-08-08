import React from "react";
import "./home.css";

const Main = (props) => {
  return (
    <>
      <div className="container-fluid home-main" style={props.mainStyle}>
        <div className="home-slogan">
          <img src={props.img} className="img-fluid rounded" alt="Ordinary Travellers" />
          <h1 className="fs-1 fw-bold" style={props.style}>
            {props.title}
          </h1>
          <p className="mx-5 fst-italic fs-5">{props.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
