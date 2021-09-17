import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import { MainPage } from "./components/Pages/MainPage";

export function Router(): ReactElement {
  return (
    <Switch>
      <Route exact={true} path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}
