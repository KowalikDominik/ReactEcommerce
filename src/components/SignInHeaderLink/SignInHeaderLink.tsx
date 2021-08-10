import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase.utils";
import { currentUserSelector } from "../../store/user/user.selectors";

interface Props {}

export const SignInHeaderLink: React.FC<Props> = () => {
  const currentUser = useSelector(currentUserSelector);
  return currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  ) : (
    <Link className="option" to="/signin">
      SIGN IN
    </Link>
  );
};
