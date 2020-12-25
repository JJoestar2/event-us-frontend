import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import '../../styles/main.css';

import RegisterPage from '../../pages/register-page';
import AuthPage from '../../pages/auth-page';
import MainPage from '../../pages/main-page';
import UserPage from '../../pages/user-page';
import EventInfo from '../../pages/event-info'
import SettingsPage from '../../pages/settings-page';

import { history } from "../../helpers/history";


const App = () => {
  return (
    <div className="App">
            <Router history={history}>
                <Switch>
                  <Route exact path="/">
                      <Redirect to="/auth" />
                  </Route>
                  <Route path="/register" exact component={RegisterPage} />
                  <Route path="/auth" exact component={AuthPage} />   
                  <Route path="/main" exact component = {MainPage} />
                  <Route path="/profile" exact component = {UserPage} />
                  <Route path="/event-detail/:id" exact component = {EventInfo} />
                  <Route path="/settings" exact component = {SettingsPage} />
                </Switch>
          </Router>
    </div>
  );
}

export default App;
