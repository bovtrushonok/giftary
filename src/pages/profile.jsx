import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { Header } from "../components/header";
import { BottomNav } from '../components/bottomNav';
import { SwitchComponent } from "../components/switcher";
import { Wrapper } from "../sharedViews/wrapper";
import { Content } from "../sharedViews/contentWrap";
import { List } from "../sharedViews/list";
import { GiftListItem, EventListItem, FriendGiftListItem}  from "../sharedViews/listItem";
import { IconWrapper } from '../sharedViews/profileIconWrapper';

const ProfilePage = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <SwitchComponent />
        <List> 
          <GiftListItem>
            <div>
              <div>
                <span>First gift</span>
                <span>Link</span>
                <span>Description</span>
              </div>
            </div>
          </GiftListItem>
          <FriendGiftListItem>
            <div>
              <div>
                <span>First friend's gift</span>
                <span>Link</span>
                <span>Description</span>
              </div>
              <input type="checkbox" />
            </div>
          </FriendGiftListItem>
          <EventListItem>
            <div>
              <span>First event</span>
              
              <div>
                <span> 26 </span>
                <span> March </span>
              </div>
            </div>
          </EventListItem>
        </List>
        <IconWrapper>
          <AddBoxRoundedIcon />
          <span>Add gifts to your wish list</span>
        </IconWrapper>

   
      </Content>
      <BottomNav />

    </Wrapper>
  )
}

export default ProfilePage;
