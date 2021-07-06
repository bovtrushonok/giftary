import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as path from './constants/routePaths';
import { EventsPageContainer, FriendsPageContainer, ProfilePageContainer } from './containers';
import AuthorizationPage from './pages/auth/authPage';
import MainPage from './pages/mainPage';

const App = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return (
      <>
        <Route path={path.mainPagePath} exact render={() => <MainPage />} />
        <Route
          path={path.profilePath}
          render={() => (
            <ProfilePageContainer />
          )}
        />
        <Redirect exact from={path.defaultPath} to={path.profilePath} />
        <Route
          path={path.eventsPagePath}
          render={() => (
            <EventsPageContainer />
          )}
        />
        <Route
          path={path.friendsPagePath}
          render={() => (
            <FriendsPageContainer />
          )}
        />
      </>
    );
  }
  return (
    <AuthorizationPage />
  );
};

export default App;
