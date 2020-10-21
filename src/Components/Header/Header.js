import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from "../../StateManagement/StateProvider";

function Header() {
    const [{basket}] = useStateValue();

    return (
        <nav className="header">
            {/* logo izquierda */}
            <Link to="/">
            <img className="header__logo"
            src="https://archive.bsideslv.org/2016/wp-content/uploads/2013/02/amzn_white.png"/>
            </Link>

            {/* SearchBar */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 3 links */}
            <div className="header__nav">

                {/* 1er Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello username</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2do Link */}
                <Link to="/" className="header__link">
                    <div className ="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3er Link */}
                <Link to="/" className="header__link">
                    <div className ="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                                {/* 3er Link */}
                <Link to="/checkout" className="header__link">
                    <div className ="header__optionBasket">
                        <ShoppingBasket></ShoppingBasket>
                        <span className="header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

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
