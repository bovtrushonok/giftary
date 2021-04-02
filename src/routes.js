import { Route } from 'react-router-dom';
import * as path from './constants/routePaths.ts';
import ProfilePage from './pages/profile.tsx';
import AuthorizationPage from './pages/auth/authPage';
import EventListPage from './pages/eventsList';
import FriendsList from './pages/friendsList';
import MainPage from './pages/mainPage';
import {
  eventsData, friendsData, friendsEventsList, giftsData,
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
              gifts={giftsData}
              events={eventsData}
            />
          )}
        />
        <Route
          path={path.defaultPath}
          exact
          render={() => (
            <ProfilePage
              gifts={giftsData}
              events={eventsData}
            />
          )}
        />
        <Route
          path={path.eventsPagePath}
          render={() => (
            <EventListPage
              friendEvents={friendsEventsList}
            />
          )}
        />
        <Route path={path.friendsPagePath} render={() => <FriendsList friends={friendsData} />} />
      </>
    );
  }
  return (
    <AuthorizationPage />
  );
};
