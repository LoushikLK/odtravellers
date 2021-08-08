import React from "react";
import Main from "../home/Main";
import Profiles from "./Profiles";
import "./about.css";
import aboutimg from "../../image/about/about-title.png";
import Commoncard2 from "../common/Commoncard2";
import Socials from "./Socials";
import instaimg from "../../image/about/instagram.png";
import youtubeimg from "../../image/about/youtube.png";
import pimg1 from "../../image/about/profiles/pimg1.jpg";
import pimg2 from "../../image/about/profiles/pimg2.jpg";
import pimg3 from "../../image/about/profiles/pimg3.jpg";
import pimg4 from "../../image/about/profiles/pimg4.jpg";
import pimg5 from "../../image/about/profiles/pimg5.jpg";
import pimg6 from "../../image/about/profiles/pimg6.jpg";
import pimg7 from "../../image/about/profiles/pimg7.jpg";
import pimg8 from "../../image/about/profiles/pimg8.jpg";
import pimg9 from "../../image/about/profiles/pimg9.jpg";

const style = {
  color: "rgb(33 193 140)",
  fontFamily: "Vollkorn",
};

function Aboutus() {
  document.title = "ABOUT US";
  return (
    <>
      <Main style={style} img={aboutimg} />
      <Commoncard2
        style={{ display: "flex", margin: "auto" }}
        pstyle={{ color: "#000" }}
        title="Who We are"
        content="We are group of friends ,We first mate eachother back in 2016 when we were in our 12th.Thus so we become close friends and something in between us all was common that is we all love to travel and want to explore places. So after complition of our 12th we started visiting as a group starting with Puri,INDIA.We had made many trips together whether it was one day or a week long and are trying to do so in near future."
      />
      <div className="profilebox m-auto">
        <Profiles
          imgsrc={pimg1}
          name="Loushik"
          desc="Learner"
          link="https://www.instagram.com/god____of___thunder/"
        />
        <Profiles
          imgsrc={pimg2}
          name="Utpal"
          desc="Main Chhotiya hoon"
          link="https://www.instagram.com/mr_ghosh_357/"
        />
        <Profiles
          imgsrc={pimg3}
          name="Aju "
          desc="Main chutiya hoon"
          link="https://www.instagram.com/krupasindhudey/"
        />
        <Profiles
          imgsrc={pimg4}
          name="Debashis "
          desc="Main chutiya hoon + bhoot hoon"
          link="https://www.instagram.com/kumar_ritun/"
        />
      </div>
      <div className="profilebox m-auto">
        <Profiles
          imgsrc={pimg5}
          name="Subash"
          desc="Main chutiya hoon"
          link="https://www.instagram.com/kiskuraaz3/"
        />
        <Profiles
          imgsrc={pimg6}
          name="Subhashis"
          desc="Main chutiya hoon"
          link="https://www.instagram.com/__mr.subu__/"
        />
        <Profiles
          imgsrc={pimg7}
          name="Prince "
          desc="Main chutiya hoon"
          link="https://www.instagram.com/prince_mohanta/"
        />
        <Profiles
          imgsrc={pimg8}
          name="Pranab"
          desc="Main chutiya hoon"
          link="https://www.instagram.com/pranab_pk19/"
        />
      </div>
      <div className="profilebox m-auto">
        <Profiles
          imgsrc={pimg9}
          name="Sangram"
          desc="Main chutiya hoon"
          link="https://www.instagram.com/sangramnayaksangram/"
        />
      </div>

      <Commoncard2
        style={{ display: "flex", margin: "auto" }}
        pstyle={{ color: "#000" }}
        title="How did all this happen?"
        content="In December 2017 we went to Puri which is famous for lord Jagannath . It
        was the first time we took a short together for one-day trip only.After
        that we started travelling to more places exploring the beauty of travelling.After sometime we thought it would be a good idea to share our journey to open world .Then we started this for people to join amd motivate people to travelling"
      />
      <section className="text-center about">
        <h1>Follow us on Social</h1>
        <div className="container">
          <div className="row">
            <Socials
              imgsrc={instaimg}
              link="https://www.instagram.com/road_.folks/"
              title="Instagram"
            />
            <Socials
              imgsrc={youtubeimg}
              link="https://www.youtube.com/channel/UCcNSfJFSaN7SSrVvBI-dV2Q/featured"
              title="Youtube"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
