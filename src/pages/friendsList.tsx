import React from 'react';
import { iFriendsListProps } from '../types/interfaces';
import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { FriendLabel } from '../components/friendLabel';
import { Wrapper } from '../sharedViews/wrapper';
import { Content } from '../sharedViews/contentWrap';
import { List } from '../sharedViews/list';
import { PageIntroduction } from '../sharedViews/pageIntroduction';

const FriendsList: React.FC<iFriendsListProps> = ({ friends } : iFriendsListProps) => {
  const friendItems = friends.map((f) => (
    <FriendLabel
      friendName={f.friendName}
      friendAvatar={f.friendAvatar}
      id={f.id}
    />
  ));
  return (
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
          {friendItems}
        </List>
      </Content>
      <BottomNav />
    </Wrapper>
  );
};

export default FriendsList;
