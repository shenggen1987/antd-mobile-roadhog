import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import { PREFIX } from './constants';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    models: () => [
    ],
    component: () => import('./routes/IndexPage'),
  });

  const Users = dynamic({
    app,
    models: () => [
      import('./models/users'),
    ],
    component: () => import('./routes/Users'),
  });

  const CRMs = dynamic({
    app,
    models: () => [
    ],
    component: () => {
      return ({ match }) => (
        <div>
          <Route path={`${match.url}/users`} component={Users} />
          <Route exact path={match.url} component={IndexPage} />
        </div>
      );
    },
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path={`/${PREFIX}`} component={CRMs} />
        <Route component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
