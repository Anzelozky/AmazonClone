import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"

function Header() {
    return (
        <nav className="header">
            {/* logo izquierda */}
            <Link to="/">
            <img className="header_logo"
            src="https://archive.bsideslv.org/2016/wp-content/uploads/2013/02/amzn_white.png"/>
            </Link>
            <input type="text" className="header_searchInput" />

        {/* 
            Logo en la izquierda -> img
            searchbox
            3 links
            icono de canasta con número
        */}
        </nav>
    )
}

export default Header
