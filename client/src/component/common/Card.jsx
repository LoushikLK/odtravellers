import React from "react";
import "./common.css";
import Commoncard from "./Commoncard"
import Commoncard2 from "./Commoncard2"

const Card = () => {
    return (
        <>
            <div className="container-fluid common-1 pt-4 ">
                <div className="card mb-3 card-bg1">
                    <div className="row g-0">
                        <Commoncard />
                        <Commoncard2 />
                    </div>
                </div>
            </div>
            <div className="container-fluid common-1 pt-4 cardbg-1">
                <div className="card mb-3 bg-dark">
                    <div className="row g-0">
                        <Commoncard2 />
                        <Commoncard />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
