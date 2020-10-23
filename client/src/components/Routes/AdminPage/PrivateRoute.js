import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../AdminApp/Spinner/Spinner";
import SideBar from "../../AdminApp/SideBar/SideBar";

const PrivateRoute = ({
  component: Component,
  influencer: { isAuthenticated, loading },
  ...rest
}) => (
  <>
    {" "}
    <SideBar />
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  </>
);

PrivateRoute.propTypes = {
  influencer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  influencer: state.influencer,
});

export default connect(mapStateToProps)(PrivateRoute);
