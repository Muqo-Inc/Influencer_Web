import React from "react";
import { Switch, Route } from "react-router-dom";
import { FormPage } from "../layouts/formPage";
import { GetStartedPage } from "../layouts/GetStartedPage";
import PrivacyPolicy from '../Privacy-Policy/Privacy_Policy'
export const Routes = () => {
  return (
    <section>
      <Switch>
        <Route path="/form" component={FormPage} />
        <Route path="/get_started" component={GetStartedPage} />
        <Route path="/privacy" component={PrivacyPolicy} />
      </Switch>
    </section>
  );
};
