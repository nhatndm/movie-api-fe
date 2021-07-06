import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

// ROUTE
import { Routes } from 'constant';

// COMPONENT
import Home from 'page/home';

const AppRoute: FC<Record<string, unknown>> = () => {
  return (
    <Switch>
      <Route exact path={Routes.Home} component={Home} />
    </Switch>
  );
};

export default AppRoute;
