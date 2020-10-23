import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminAppRoutes } from "../Routes/AdminPage/AdminAppRoutes";

const AdminApp = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact component={AdminAppRoutes} />
      </Switch>
    </Fragment>
  );
};

export default AdminApp;
