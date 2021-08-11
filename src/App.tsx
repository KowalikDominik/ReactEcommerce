import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { SignInUpPage } from "./pages/SignInUpPage/SignInUpPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";

import {
  auth,
  addCollectionsAndDocument,
  createUserProfileDocument,
} from "./services/firebase.utils";

import { RootState } from "./store/store";
import { setCurrentUser } from "./store/user/user.slice";
import { IUser } from "./interfaces";
import { collectionsSelector } from "./store/collection/collection.selectors";

function App() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const collections = useSelector(collectionsSelector);
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

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />

        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUpPage />)}
        />
      </Switch>
    </div>
  );
}

export default App;
