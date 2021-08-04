import React from "react";
import { Switch, Route } from "react-router";

import "./App.scss";
import { HomePage } from "./Pages/HomePage";
import { ShopPage } from "./Pages/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
