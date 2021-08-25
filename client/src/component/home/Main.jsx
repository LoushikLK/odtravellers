import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

const Main = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="container-fluid home-main" style={props.mainStyle}>
        <div className="home-slogan">
          <img
            src={props.img}
            className="img-fluid rounded"
            alt="Ordinary Travellers"
          />
          <h1 className="fs-1 fw-bold fst-italic fonts" style={props.style}>
            {props.title}
          </h1>
          <p className="mx-5 fst-italic fs-4 nav-fonts text-center fw-bold">
            {props.content}
          </p>
          <div className="btn" style={{ display: `${props.display}` }}>
            <button
              className=" btn home-btn fw-bold"
              onClick={() => {
                history.push("/gallery");
              }}
            >
              Watch Images
            </button>
            <button
              className="btn home-btn fw-bold"
              onClick={() => {
                history.push("/about");
              }}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
