import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { Avatar } from '../components/avatar';
import { Wrapper } from '../sharedViews/wrapper';
import { FriendInfo, Content } from '../sharedViews/contentWrap';
import { EventListItem } from '../sharedViews/listItem';
import { List } from '../sharedViews/list';
import { PageIntroduction } from '../sharedViews/pageIntroduction';

const FriendsList = () => (
  <Wrapper>
    <Header />
    <Content>
      <PageIntroduction>
        <h1>Friends</h1>
        <span>
          Invite your friends, get access to their wishes and don&apos;t
          forget important dates &#129395;
        </span>
      </PageIntroduction>
      <List>
        <FriendInfo>
          <Avatar />
          <EventListItem>
            <div>
              <span>Friend&apos;s Name</span>
            </div>
          </EventListItem>
        </FriendInfo>
      </List>
    </Content>
    <BottomNav />
  </Wrapper>
);

export default FriendsList;
