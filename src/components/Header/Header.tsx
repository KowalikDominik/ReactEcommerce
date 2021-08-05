import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../services/firebase.utils";

interface Props {
  currentUser: {} | null;
}

export const Header: React.FC<Props> = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};