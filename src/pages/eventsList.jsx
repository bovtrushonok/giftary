import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { Avatar } from '../components/avatar';
import { Wrapper } from '../sharedViews/wrapper';
import { FriendInfo, Content } from '../sharedViews/contentWrap';
import { PageIntroduction } from '../sharedViews/pageIntroduction';
import { List } from '../sharedViews/list';
import { DateBlock, EventListItem } from '../sharedViews/listItem';

const EventListPage = () => (
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
            <>
              <span>Friend&apos;s Name</span>
              <DateBlock>
                <p> 26 </p>
                <p> March </p>
              </DateBlock>
              <p>Event type</p>
            </>
          </EventListItem>
        </FriendInfo>
      </List>
    </Content>
    <BottomNav />
  </Wrapper>
);

export default EventListPage;
