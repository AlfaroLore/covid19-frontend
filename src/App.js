import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Country from './components/features/Country';
import Report from './components/features/Report';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/country" component={Country} />
            <Route exact path="/report" component={Report} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
