import React from "react";
import "./common.css";

const Commoncard2 = (props) => {
  return (
    <>
      <div className="col-md-8 " style={props.style}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1 nav-fonts nav-title ">
            {props.title}
          </h5>
          <p className="card-text text-center fs-4 mt-5 nav-fonts " style={props.pstyle}>
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
};
export default Commoncard2;
