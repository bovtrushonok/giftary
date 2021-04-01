import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { Avatar } from '../components/avatar';
import { FriendEvent } from '../components/friendEvent.tsx';
import { Wrapper } from '../sharedViews/wrapper';
import { FriendInfo, Content } from '../sharedViews/contentWrap';
import { PageIntroduction } from '../sharedViews/pageIntroduction';
import { List } from '../sharedViews/list';

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
          <FriendEvent friendName="Good friend" eventName="First event" eventDay="26" eventMonth="March" />
        </FriendInfo>
      </List>
    </Content>
    <BottomNav />
  </Wrapper>
);

export default EventListPage;
