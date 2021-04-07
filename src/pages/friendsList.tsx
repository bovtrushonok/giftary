import React from 'react';
import { IFriendsPageProps } from '../types';
import { Header, BottomNav, FriendLabel } from '../components';
import {
  Wrapper, Content, List, PageIntroduction,
} from '../sharedViews';

const FriendsList: React.FC<IFriendsPageProps> = ({ friends }) => {
  const friendItems = friends.map((f) => (
    <FriendLabel {...f} />
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
