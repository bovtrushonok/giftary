import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { Avatar } from '../components/avatar';
import { FriendLabel } from '../components/friendLabel.tsx';
import { Wrapper } from '../sharedViews/wrapper';
import { FriendInfo, Content } from '../sharedViews/contentWrap';
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
          <FriendLabel friendName="Good friend" />
        </FriendInfo>
      </List>
    </Content>
    <BottomNav />
  </Wrapper>
);

export default FriendsList;
