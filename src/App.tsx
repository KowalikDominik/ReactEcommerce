import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";

import "./App.scss";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { SignInOut } from "./pages/SignInOut/SignInOut";
import { auth } from "./services/firebase.utils";

function App() {
  const [unsubscribe, setUnsubscribe] = useState(null);
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {};
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInOut} />
      </Switch>
    </div>
  );
}

export default App;
