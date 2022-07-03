import React from "react";
import ThemeDemo from "../containers/Dashboard";
import Route from "./Route";

export default function Routes() {
  return <Route path="/" component={ThemeDemo} />;
}
