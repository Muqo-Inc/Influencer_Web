import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "../../AdminApp/DashBoard/DashBoard";
import InfluencerDetailsPage from "../../AdminApp/Influencers/InfluencerDetails/InfluencerDetailsPage";
import InfluencersListPage from "../../AdminApp/Influencers/InfluencersList/InfluencersListPage";
import LogInPage from "../../AdminApp/SignInPage/LogInPage";
import PrivateRoute from "./PrivateRoute";

export const AdminAppRoutes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/login" component={LogInPage} />

        <PrivateRoute exact path="/admin" component={DashBoard} />
        <PrivateRoute
          exact
          path="/admin/influencers"
          component={InfluencersListPage}
        />
        <PrivateRoute
          exact
          path="/admin/influencer/:id"
          component={InfluencerDetailsPage}
        />
      </Switch>
    </section>
  );
};
