import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { SignInUp } from "./pages/SignInUp/SignInUp";
import { auth, createUserProfileDocument } from "./services/firebase.utils";

import { RootState } from "./store/store";
import { setCurrentUser } from "./store/user/user.slice";
import { IUser } from "./interfaces";

function App() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot) => {
          console.log("userref");
          const newData = { id: snapShot.id, ...snapShot.data() } as IUser;
          dispatch(setCurrentUser(newData));
        });
      } else {
        console.log("else");
        dispatch(setCurrentUser(user));
      }
    });
    return () => {};
  }, [dispatch]);
  console.log("app render");
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

export default App;
