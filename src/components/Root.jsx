import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Base from './Base';
import LinkLogin from './LinkLogin';
import Login from '../containers/Login';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div style={{ height: '100%' }}>
        <Route
          exact
          path="/"
          render={() => (<Base contentChildren={<LinkLogin />} />)}
        />
        <Route
          path="/login"
          render={() => (<Base contentChildren={<Login />} />)}
        />
      </div>
    </HashRouter >
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
