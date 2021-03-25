import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import SwitchComponent from "../partials/switcher";

const ProfilePage = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <SwitchComponent />
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default ProfilePage;