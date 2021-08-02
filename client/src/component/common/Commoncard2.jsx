import React from "react";
import "./common.css";

const Commoncard2 = (props) => {
    return (
        <>

            <div className="col-md-8 " style={props.style}>
                <div className="card-body">
                    <h5 className="card-title text-center fs-1 nav-fonts text-dark">
                        Why Travelling ?
                    </h5>
                    <p className="card-text text-center fs-4 mt-5 " >
                        There is nothing quite like traveling, like seeing a new place
                        for the first time or returning to a favorite one.You can’t
                        imagine how different life is in another place until you see
                        for yourself. Everything from work to family to beliefs to
                        interests is not what you might expect from your own
                        experience. The different setting will also help you discover
                        and consider fresh ideas you hadn’t thought of before.So you
                        should travel when you got the chance.
                    </p>
                </div>
            </div>

        </>
    );
};
export default Commoncard2;
