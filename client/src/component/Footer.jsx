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

        <NavLink exact className="justify-content-end" to="/admin/login"> <img className="logo" src="https://ordinarytravellers.herokuapp.com/image/admin/adminicon.png" alt="Admin" /></NavLink>


      </footer>
    </div>
  )
}

export default Footer;