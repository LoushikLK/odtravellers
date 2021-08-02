import React from 'react';
import { NavLink } from 'react-router-dom'




import './style.css'

function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-main py-2 primary-bg-color1 px-3">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand fs-1 text-white nav-fonts display-3" to="/">OrdinaryTravellers</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-icon"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-border-width filter-svg" viewBox="0 0 16 16">
                            <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                        </svg></span>
                    </button>
                    <div className="collapse navbar-collapse nav navcontent-right " id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link navbar-links fs-4  nav-fonts" aria-current="page" exact to="/" activeClassName="nav-active" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link navbar-links fs-4 nav-fonts" exact to="/galarry" activeClassName="nav-active"  >Gallary</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link navbar-links fs-4  nav-fonts" exact to="/about" activeClassName="nav-active" >AboutUS!</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;