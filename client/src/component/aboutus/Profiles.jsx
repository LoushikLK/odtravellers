import React from "react";
import "./about.css";

const Profile = (props) => {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutcard m-auto">
          <img
            src={props.imgsrc}
            className="card-img-top aboutimg"
            alt="profile-images"
          />

          <div className="card-body">
            <center>
              <h5 className="aboutcard-title">{props.name}</h5>
            </center>

            <p className="card-text">{props.desc}</p>

            <center>
              <a href={props.link} className="btn aboutbutton">
                Follow on Socials
              </a>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
