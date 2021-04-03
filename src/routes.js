import { Route } from 'react-router-dom';
import * as path from './constants/routePaths.ts';
import ProfilePage from './pages/profile.tsx';
import AuthorizationPage from './pages/auth/authPage';
import EventListPage from './pages/eventsList';
import FriendsList from './pages/friendsList';
import MainPage from './pages/mainPage';
import {
  state,
} from './data';

export const useRoutes = (isAuthenticated) => {
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
            />
          )}
        />
        <Route
          path={path.defaultPath}
          exact
          render={() => (
            <ProfilePage
              gifts={state.profilePage.giftsData}
              events={state.profilePage.eventsData}
              mode={state.profilePage.mode}
              addMode={state.profilePage.addMode}
            />
          )}
        />
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
