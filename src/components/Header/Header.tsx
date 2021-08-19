import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import CardIcon from "../CardIcon/CardIcon";
import CardDropdown from "../CardDropdown/CardDropdown";

import { SignInHeaderLink } from "../SignInHeaderLink/SignInHeaderLink";
import { HeaderSearchBox } from "../HeaderSearchBox/HeaderSearchBox";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <HeaderSearchBox />
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <SignInHeaderLink />

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <CardIcon />
        <CardDropdown />
      </div>
    </div>
  );
};

export default Header;
