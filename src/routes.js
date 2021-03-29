import ProfilePage from "./pages/profile";
import AuthorizationPage from "./pages/auth/authPage";
import EventListPage from "./pages/eventsList";
import FriendsList from "./pages/friendsList";
import MainPage from "./pages/mainPage";
import { Route } from 'react-router-dom';

export const useRoutes = (isAuthenticated) => {
  if(isAuthenticated) {
    return (
      <div>
        <Route path='/' exact render = {() => <MainPage />}/>
        <Route path='/profile' render = {() => <ProfilePage />} />
        <Route path='/events' render = {() =>  <EventListPage />} />
        <Route path='/contacts' render = {() => <FriendsList />} />
      </div>
    )
  }
  return (
    <div>
      <AuthorizationPage />
    </div>
  )
}
