import React, { useEffect } from "react";
import { Switch, Route } from "react-router";

import "./App.scss";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { SignInUp } from "./pages/SignInUp/SignInUp";
import { auth, createUserProfileDocument } from "./services/firebase.utils";

import { setCurrentUser } from "./redux/userReducer/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else setCurrentUser(user);
    });
    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
