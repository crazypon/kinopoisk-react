import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <NavLink end={true} className="navbar-brand" to="/">Kinopoisk</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink end className="nav-link" to="#">Comments</NavLink>
                <NavLink end className="nav-link" to="#">Watch Later</NavLink>
            </div>
        </div>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </nav>
}

export default Navbar;
