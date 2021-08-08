import React from 'react'
import './about.css'


const Socials = (props) => {
    return (
        <>


            <div className=" col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                <span > <a href={props.link} target="_blank" rel="noreferrer" className="aboutlink"><img src={props.imgsrc} alt="socials" /> </a></span>
                <h2>{props.title}</h2>

            </div>

        </>
    )
}
export default Socials
