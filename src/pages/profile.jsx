import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { SwitchComponent } from '../components/switcher';
import { MyGift } from '../components/myGift.tsx';
import { Wrapper } from '../sharedViews/wrapper';
import { Content } from '../sharedViews/contentWrap';
import { List } from '../sharedViews/list';
import {
  EventListItem, FriendGiftListItem, DateBlock, GiftWrapper,
} from '../sharedViews/listItem';
import { IconWrapper } from '../sharedViews/profileIconWrapper';

const ProfilePage = () => (
  <Wrapper>
    <Content>
      <Header />
      <SwitchComponent />
      <List>
        <MyGift giftName="First gift" giftLink="some link" giftDescription="awesome present" />
        <FriendGiftListItem>
          <>
            <GiftWrapper>
              <span>First gift</span>
              <span>Link</span>
              <span>Description</span>
            </GiftWrapper>
            <input type="checkbox" />
          </>
        </FriendGiftListItem>
        <EventListItem>
          <>
            <span>First event</span>
            <DateBlock>
              <p> 26 </p>
              <p> March </p>
            </DateBlock>
          </>
        </EventListItem>
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
