import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import "./App.css";
import { NavBar } from "./components/layouts/NavBar/NavBar";
import { Routes } from "./components/Routes/Routes";
import { store } from "./redux/store";
import LandingPage from "./components/layouts/LandingPage/LandingPage";

import AdminApp from "./components/AdminApp/AdminApp";

import { loadAdmin } from "./redux/actions/influencersActions";
import setAuthToken from "./utils/setAuthToken";
import BetaPage from "./components/layouts/LandingPage/BetaPage";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [appType, setAppType] = useState("MainApp");

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    if (
      window.location.pathname.match(/^\/([^?\/]+)/) &&
      window.location.pathname.match(/^\/([^?\/]+)/)[1] === "admin"
    ) {
      setAppType("AdminApp");
      setAuthToken(localStorage.token);
      store.dispatch(loadAdmin());
    }
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  return (
    <Provider store={store}>
      <Router>
        {appType === "MainApp" ? (
          <Fragment>
            {/* <NavBar /> */}
            <Switch>
              <Route exact path="/" component={BetaPage} />
              <Route component={Routes} />
            </Switch>
            {/* <Footer /> */}
          </Fragment>
        ) : (
          <AdminApp />
        )}
      </Router>
    </Provider>
  );
}

export default App;
