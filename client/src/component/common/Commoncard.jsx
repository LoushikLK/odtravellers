import React from "react";
import "./common.css";

const Commoncard = (props) => {
    return (
        <>
            <div className="col-md-4">
                <img src={props.image} className="img-fluid rounded" alt="images" />
            </div>

        </>
    );
};
export default Commoncard;
