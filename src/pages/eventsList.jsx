import { Header } from "../components/header";
import { BottomNav } from '../components/bottomNav';
import {  Avatar } from "../components/avatar";
import { Wrapper } from "../sharedViews/wrapper";
import { FriendInfo, Content } from "../sharedViews/contentWrap";
import { PageIntroduction } from '../sharedViews/pageIntroduction';
import { List } from "../sharedViews/list";
import { EventListItem }  from "../sharedViews/listItem";


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
