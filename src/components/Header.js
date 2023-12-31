import React from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import {Link} from "react-router-dom"
import {useStateValue} from "../state/StateProvider"

function Header() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="header">
      {/* Header Logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* Search */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
        />
        {/* Logo (of search) */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Children options */}
      <div className="header__nav">
        {/* Sign In */}
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* Orders */}
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        {/* Prime */}
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {/* Basket */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {/* Optional Chaining */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
