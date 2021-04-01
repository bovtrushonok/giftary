import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { SwitchComponent } from '../components/switcher';
import { FriendsGift } from '../components/friendsGift.tsx';
import { MyEvent } from '../components/myEvent.tsx';
import { MyGift } from '../components/myGift.tsx';
import { Wrapper } from '../sharedViews/wrapper';
import { Content } from '../sharedViews/contentWrap';
import { List } from '../sharedViews/list';
import { IconWrapper } from '../sharedViews/profileIconWrapper';

const ProfilePage = () => (
  <Wrapper>
    <Content>
      <Header />
      <SwitchComponent />
      <List>
        <MyGift giftName="First gift" giftLink="some link" giftDescription="awesome present" />
        <FriendsGift giftName="First friends gift" giftLink="some link" giftDescription="awesome present" />
        <MyEvent eventName="First event" eventDay="26" eventMonth="March" />
      </List>
      <IconWrapper>
        <AddBoxRoundedIcon />
        <span>Add gifts to your wish list</span>
      </IconWrapper>
    </Content>
    <BottomNav />
  </Wrapper>
);

export default ProfilePage;
