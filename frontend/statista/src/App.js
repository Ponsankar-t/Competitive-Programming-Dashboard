import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import login from './login';
import signup from './signup';
import dashboard from './dashboard';
import ForgotPassword from './ForgotPassword';
import Codechef from './codechef';
import home from './home';
function App() {
  return (
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={login} />a
            <Route path = "/signup" component={signup}/>a
            <Route path = "/dashboard" component={dashboard}/>a
            <Route path = "/codechef" component={Codechef}/>
            <Route path="/ForgotPassword" component={ForgotPassword}/>a
            <Route path="/" component={home}/>
        </Switch>
    </div>
</Router>
  );
}

export default App;
