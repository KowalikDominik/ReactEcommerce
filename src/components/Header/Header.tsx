import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import CardIcon from "../CardIcon/CardIcon";
import CardDropdown from "../CardDropdown/CardDropdown";

import { SignInHeaderLink } from "../SignInHeaderLink/SignInHeaderLink";
import SearchBox from "../SearchBox/SearchBox";

interface Props {}

const Header: React.FC<Props> = () => {
  const [menu, setMenu] = useState(false);
  const mobileMenu = () => {
    setMenu((prev) => !prev);
  };
  const menuIconRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    /**
     * HideCard if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        dropdownRef.current !== event.target &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuIconRef, dropdownRef]);
  return (
    <>
      <div className={`menu-backdrop ${menu && "visible"}`}></div>
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="options">
          <SearchBox />
        </div>
        <div className="right-header">
          <div className="options">
            <div
              className={`options-container mobile ${menu && "visible"} `}
              ref={dropdownRef}
            >
              <Link className="option" to="/">
                COLLECTIONS
              </Link>
              <Link className="option" to="/shop">
                SHOP
              </Link>
              <SignInHeaderLink />
              <Link className="option" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
          <div className="options">
            <CardIcon />
            <CardDropdown />
          </div>
          <div className="options">
            <div
              className="hamburger-icon noselect"
              onClick={mobileMenu}
              ref={menuIconRef}
            >
              <div
                className={`hamburger ${menu && "is-active"}`}
                id="hamburger-1"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
