import React from 'react';
import { NavLink } from 'react-router-dom'

import './style.css'

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <NavLink activeClassName="text-primary" exact className="navbar-brand fs-3 text-warning fonts" id="" to="/">OrdinaryTravellers</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink activeClassName="text-primary" exact className="nav-link active fonts" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="text-primary" exact className="nav-link fonts" to="/galarry">Gallary</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="text-primary" className="nav-link fonts" to="/about">AboutUS!</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <NavLink activeClassName="text-primary" exact className="nav-link fonts text-warning" to="/admin/login"> <img className="logo" src="https://ordinarytravellers.herokuapp.com/image/admin/adminicon.png" alt="Admin" /></NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;