import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";

import Main from "../common/Main";
import Timelinecard from "./Timelinecard";
import img1 from "../../image/home/home-main.jpg";
import titleImage from "../../image/home/main-title.png";

let mainStyle = {
  fontSize: "2rem",
  backgroundImage: `url(${img1})`,
};

const Home = () => {
  const history = useHistory();
  const btn = () => {
    return (
      <>
        <div className="btn container-fluid btn-div">
          <button
            className=" btn main-btn fst-italic fw-bold"
            onClick={() => {
              history.push("/gallery");
            }}
          >
            Watch Images
          </button>
          <button
            className="btn main-btn fst-italic fw-bold"
            onClick={() => {
              history.push("/about");
            }}
          >
            About Us
          </button>
        </div>
      </>
    );
  };

  document.title = "HOME";
  return (
    <>
      <div className="home-container">
        <Main
          mainStyle={mainStyle}
          title="- -WELCOME- -"
          img={titleImage}
          display="block"
          div={btn()}
          content={
            "There is nothing quite like traveling, like seeing a new place for the first time or returning to a favorite one.You can’t imagine how different life is in another place until you see for yourself. Everything from work to family to beliefs to interests is not what you might expect from your own experience. The different setting will also help you discover and consider fresh ideas you hadn’t thought of before.So you should travel when you got the chance."
          }
        />
        <div className="mt-5">
          <Timelinecard />
        </div>
      </div>
    </>
  );
};

export default Home;
