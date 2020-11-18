import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages/';
import { IsUserRedirect, PotectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
        <SignUp />
      </IsUserRedirect>
      <PotectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </PotectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;
