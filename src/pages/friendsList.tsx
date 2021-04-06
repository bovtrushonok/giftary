import React from 'react';
import { IFriendsPageProps } from '../types/interfaces';
import { Header, BottomNav, FriendLabel } from '../components/index';
import {
  Wrapper, Content, List, PageIntroduction,
} from '../sharedViews/index';

const FriendsList: React.FC<IFriendsPageProps> = ({ friends }) => {
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
