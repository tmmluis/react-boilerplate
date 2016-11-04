import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from "./pages/App.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Messages from "./pages/Messages.jsx";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Profile" component={Profile} />
      <Route path="Messages" component={Messages} />
    </Route>
  </Router>,
  app
);
