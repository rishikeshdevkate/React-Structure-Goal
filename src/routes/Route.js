import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AppHomeLayout from "../layouts/Home/index";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  /**
   * As a non authed user (not logged in / login token not valid)
   * If they try to access a private route (one requiring authentication)
   * Then redirect user to non private route -> ie. 'Home Page', 'Sign In', etc...
   *
   * Ex:
   *    if (isPrivate && !signed) {
   *        return <Redirect to="/" />;
   *    }
   */

  /**
   * As an authed user (already logged in)
   * If they try to access a non private route ie. Homepage or Sign In
   * Redirect them to main page as an authed user -> ie. 'dashboard', 'profile' etc...
   *
   * Ex:
   *    if (!isPrivate && signed) {
   *        return <Redirect to="/dashboard" />;
   *    }
   */

  /**
   * If when we have pages that require use of a different layout other than default.
   * We will implemnt some function to determine which layout file to load.
   * Right now we only have one so it is static set to DefauletLayout.
   *
   * Ex:
   * const Layout = signed ? <<Different Layout File>> : DefaultLayout;
   */

  let Layout = AppHomeLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};
