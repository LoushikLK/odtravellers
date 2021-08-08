import React from "react";
import "./common.css";
import Commoncard from "./Commoncard"
import Commoncard2 from "./Commoncard2"
import img from "../../image/home/cmn1.jpg";


const Card = () => {
    return (
        <>
            <div className="container-fluid common-1 pt-4 ">
                <div className="card mb-3 card-bg1 card-div">
                    <div className="row g-0">
                        <Commoncard image={img} />
                        <Commoncard2 content="There is nothing quite like traveling, like seeing a new place
                        for the first time or returning to a favorite one.You can’t
                        imagine how different life is in another place until you see
                        for yourself. Everything from work to family to beliefs to
                        interests is not what you might expect from your own
                        experience. The different setting will also help you discover
                        and consider fresh ideas you hadn’t thought of before.So you
                        should travel when you got the chance."/>
                    </div>
                </div>
            </div>
            <div className="container-fluid common-1 pt-4 cardbg-1">
                <div className="card mb-3 card-div">
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
