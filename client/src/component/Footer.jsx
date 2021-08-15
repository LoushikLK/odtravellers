import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'


const Footer = () => {
  const date = new Date().getFullYear()
  // console.log(date)
  return (
    <div className="footer">
      <footer>
        <small className="text-light">Copyright {date} &copy; Made With &#x1F496; BY LK </small>


      </footer>
    </div>
  )
}

export default Footer;