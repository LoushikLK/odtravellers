import React from "react";
import "./home.css";
import timelinedata from "./timelinedata";
const Timelinecard = () => {
  return (
    <>
      <div className="main-timeline">
        <div className="timeline">
          <div className="timeline-content bg-dark">
            <div className="timeline-year">2022</div>
            <h3 className="title text-warning fonts">
              Upcoming...
              <br /> Goa,INDIA
            </h3>
            <p className="description text-light fw-bold">Loading...</p>
          </div>
        </div>

        {timelinedata.map((value, index) => {
          return (
            <div className="timeline">
              <div className="timeline-content ">
                <img src={value.imagesrc} alt="image" key={index} />
                <div className="timeline-year "> {value.date}</div>
                <h3 className="title text-dark d-flex justify-content-center fonts">
                  {value.place}
                </h3>
                <p className="description text-dark fw-bold">
                  {value.about}{" "}
                  <a href={value.link} className="text-danger">
                    more...
                  </a>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Timelinecard;
