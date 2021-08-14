import React from "react";
import "./common.css";
import down from '../../image/down.png'
const Main = (props) => {
    return (
        <>
            <div className="container-fluid main" style={props.mainStyle}>
                <div className="main-slogan">
                    <img
                        src={props.img}
                        className="img-fluid"
                        alt="Ordinary Travellers"
                    />
                    <h1 className="display-3 fw-bold fst-italic" style={props.style}>
                        {props.title}
                    </h1>
                    <p className=" fst-italic display-6 nav-fonts text-center fw-bold">
                        {props.content}
                    </p>
                    {props.div}
                    <img
                        src={down}
                        className="img-fluid"
                        alt=""
                        style={{ height: '2rem' }}

                    />
                    <img
                        src={down}
                        className="img-fluid"
                        alt=""
                        style={{ height: '5rem' }}
                    />
                </div>
            </div>
        </>
    );
};

export default Main;
