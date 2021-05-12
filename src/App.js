import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Styles from './App.module.css';
import Programs from './scenes/programs/programs';

import NavBar from './nav_bar';

class App extends Component {
  _getRoutes = () => (
    <Switch>
      <Route
        path = "/"
        exact
        component = {Programs}
      />
    </Switch>
  )

  render() {
    return (
      <div className = {Styles.root}>
        <NavBar pathname = {this.props.location.pathname} />
        <div className = {Styles.routeWrapper}>{this._getRoutes()}</div>
      </div>
    );
  }
}
export default withRouter(App);
