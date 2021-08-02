import React from "react";
import img from "../../image/home/cmn1.jpg";
import "./common.css";

const Commoncard = () => {
    return (
        <>
            <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="images" />
            </div>

        </>
    );
};
export default Commoncard;
