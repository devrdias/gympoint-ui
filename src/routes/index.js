import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import Messages from '~/pages/Messages';

export default function Routes() {
  return (
    // <HashRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/messages" component={Messages} isPrivate />
    </Switch>
    // </HashRouter>
  );
}
