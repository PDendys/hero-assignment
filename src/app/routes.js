import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import StopwatchesListPage from './pages/StopwatchesListPage';
import SingleStopwatchPage from './pages/SingleStopwatchPage';

import { ROUTES } from './constants';

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path={ROUTES.stopwatchesList} component={StopwatchesListPage} />
      <Route path={ROUTES.singleStopwatch} component={SingleStopwatchPage} />
      <Route path={ROUTES.any}>
        <Redirect to={ROUTES.stopwatchesList} />
      </Route>
    </Switch>
  );
} 