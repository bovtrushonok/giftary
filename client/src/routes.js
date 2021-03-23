import ProfilePage from "./pages/profile";
import AuthorizationPage from "./pages/auth";
import EventListPage from "./pages/eventList";
import FriendsList from "./pages/friendsList";
import MainPage from "./pages/mainPage";
const { Route } = require("react-router-dom")

const useRoutes = (isAuthenticated) => {
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

export default useRoutes;