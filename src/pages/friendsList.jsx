import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import { EventListItem }  from "../partials/listItem";
import List from "../partials/list";
import { FriendInfo, Avatar } from "../partials/friendInfo";
import { PageIntroduction } from '../partials/pageIntroduction';

const FriendsList = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PageIntroduction>
          <h1>Friends</h1>
          <span>Invite your friends, get access to their wishes and don't forget important dates &#129395; </span>
        </PageIntroduction>
        <List>
          <FriendInfo>
            <Avatar />
            <EventListItem>
              <div>
                <span>Friend's Name</span>
              </div>
            </EventListItem>
          </FriendInfo>
        </List>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default FriendsList;