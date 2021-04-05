import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as path from './constants/routePaths';
import ProfilePage from './pages/profile';
import AuthorizationPage from './pages/auth/authPage';
import EventListPage from './pages/eventsList';
import FriendsList from './pages/friendsList';
import MainPage from './pages/mainPage';

const App = ({ state, dispatch }) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return (
      <>
        <Route path={path.mainPagePath} exact render={() => <MainPage />} />
        <Route
          path={path.profilePath}
          render={() => (
            <ProfilePage
              gifts={state.profilePage.giftsData}
              events={state.profilePage.eventsData}
              mode={state.profilePage.mode}
              addMode={state.profilePage.addMode}
              dispatch={dispatch}
            />
          )}
        />
        <Redirect exact from={path.defaultPath} to={path.profilePath} />
        <Route
          path={path.eventsPagePath}
          render={() => (
            <EventListPage
              friendEvents={state.eventsPage.friendsEventsList}
            />
          )}
        />
        <Route
          path={path.friendsPagePath}
          render={() => (
            <FriendsList
              friends={state.friendsPage.friendsData}
            />
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
