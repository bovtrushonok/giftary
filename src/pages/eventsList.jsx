import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import { PageIntroduction } from '../partials/pageIntroduction';
import List from "../partials/list";
import { EventListItem }  from "../partials/listItem";
import { FriendInfo, Avatar } from "../partials/friendInfo";

const EventListPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PageIntroduction>
          <h1>Events</h1>
        </PageIntroduction>
        <List>
          <FriendInfo>
            <Avatar />
            <EventListItem>
            <div>
              <span>Friend's Name</span>
              <div>
                <span> 26 </span>
                <span> March </span>
              </div>
              <p>Event type</p>
            </div>
            </EventListItem>
          </FriendInfo>
        </List>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default EventListPage;