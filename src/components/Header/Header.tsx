import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../services/firebase.utils";

import { useSelector } from "react-redux";
import CardIcon from "../CardIcon/CardIcon";
import CardDropdown from "../CardDropdown/CardDropdown";

import { RootState } from "../../store/store";
import { createSelector } from "reselect";
import cardSlice from "../../store/card/card.slice";

interface Props {}

const userSelector = createSelector(
  (state: RootState) => state.user,
  (user) => user.currentUser
);
const hiddenSelector = createSelector(
  (state: RootState) => state.card,
  (card) => card.hidden
);

const Header: React.FC<Props> = () => {
  const currentUser = useSelector(userSelector);
  const hidden = useSelector(hiddenSelector);

  console.log(`#Header render: ${hidden}`);
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
        <CardIcon />
        {!hidden && <CardDropdown />}
      </div>
    </div>
  );
};

export default Header;
