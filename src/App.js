import React from 'react';
import routes from './routes';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import NoFound404Page from './pages/404.js';
import './App.css';
import './css/tailwind.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          {routes.map((route) => <Route exact path={route.path} component={route.component} />)}
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoFound404Page} />
        </Switch>
      </>
    );
  }
}

export default App;
