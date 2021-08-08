import React from "react";
import "./home.css";
import Main from "./Main";
import Commoncard from "../common/Commoncard";
import Commoncard2 from "../common/Commoncard2";
import Timelinecard from "./Timelinecard";
import cardImg1 from "../../image/home/cmn1.jpeg";
import cardImg2 from "../../image/home/cmn2.jpeg";
import cardImg3 from "../../image/home/cmn3.jpg";
import cardImg4 from "../../image/home/cmn4.jpg";
import cardImg5 from "../../image/home/cmn5.jpg";
import img1 from "../../image/home/home-main.jpg";
import titleImage from "../../image/home/main-title.png";

let mainStyle = {
  fontSize: "2rem",
  backgroundImage: `url(${img1})`,
};

const Home = () => {
  document.title = "HOME";
  return (
    <>
      <div className="home-container">
        <Main
          mainStyle={mainStyle}
          img={titleImage}
          content={
            "Sometime you Will never know the VALUE of a moment,until it becomes a MEMORY!"
          }
        />
        <div className="container-fluid common-1 pt-4 ">
          <div className="card mb-3 card-bg1">
            <div className="row g-0">
              <Commoncard image={cardImg1} />
              <Commoncard2
                title="Why Travelling ?"
                content="Travelling to new places are some of the most rewarding experiences that we have.Whether we go alone or with a big group of friends, it creates new ideas and experiences that we could never get at home. Whilst some people prefer to travel solo, there are many benefits that you can only get when travelling with friends."
              />
            </div>
          </div>
        </div>
        <div className="container-fluid common-1 pt-4 ">
          <div className="card mb-3 card-bg1">
            <div className="row g-0">
              <Commoncard2
                title="Challenging yourself."
                content="You might feel like you’re stuck in a rut in your daily life. Or you’re yearning for something exciting and different. You’re craving new experiences and new challenges. Travel is the ideal place to test yourself. It pushes people to their limits and gets them outside their comfort zone. You’ll discover how resourceful you are when you’re exposed to new places, people and experiences. Maybe it’s finding your way around a busy city. Or ordering a meal when you don’t speak the language. Or zip-lining. You’ll feel pride when you finish your trip successfully."
              />
              <Commoncard image={cardImg2} />
            </div>
          </div>
        </div>
        <div className="container-fluid common-1 pt-4 ">
          <div className="card mb-3 card-bg1">
            <div className="row g-0">
              <Commoncard image={cardImg3} />
              <Commoncard2
                title="Learning."
                content="Learning is a strong reason why people love to travel.  They want to experience something unfamiliar and leave with new skills or knowledge. Seeing the world is more educational than a high school or college class. This condensed crash course in discovering how the rest of the world lives actually will cover subjects like history, geography and sociology. Every destination has something unique to teach visitors, and immersing themselves in a completely different world is the best learning experience."
              />
            </div>
          </div>
        </div>
        <div className="container-fluid common-1 pt-4 ">
          <div className="card mb-3 card-bg1">
            <div className="row g-0">
              <Commoncard2
                title="Expanding your perspective."
                content="Another reason why people love to travel: it helps open your mind. You realize that there’s no one way to live life. Meeting people from other places will show you that your world view isn’t the same as everyone else’s.You can’t imagine how different life is in another place until you see for yourself. Everything from work to family to beliefs to interests is not what you might expect from your own experience."
              />
              <Commoncard image={cardImg4} />
            </div>
          </div>
        </div>
        <div className="container-fluid common-1 pt-4 ">
          <div className="card mb-3 card-bg1">
            <div className="row g-0">
              <Commoncard image={cardImg5} />
              <Commoncard2
                title="Having an adventure."
                content="Conquering fresh territory is exhilarating - and one more reason why people love to travel. Humans crave new experiences and travel lets us tap into that craving. A trip is the perfect time to do something different and exciting, especially something you can’t do at home. The thrill starts the minute you land in a new place. Conquering that territory could be trying spicy Thai street food or conversing in Madrid with your rusty college Spanish. Or it could be a physical experience, like scuba diving the Great Barrier Reef or hiking the Inca Trail to Machu Picchu. You’ll have lots of fun."
              />
            </div>
          </div>
        </div>
        <Timelinecard />
      </div>
    </>
  );
};

export default Home;
