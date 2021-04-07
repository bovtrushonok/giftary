import React from 'react';
import { IFriendEventList } from '../types';
import { Header, BottomNav, FriendEvent } from '../components';
import {
  Wrapper, Content, PageIntroduction, List,
} from '../sharedViews';

const EventListPage: React.FC<IFriendEventList> = ({ friendEvents }) => {
  const friendEventItems = friendEvents.map((ev) => (
    <FriendEvent {...ev} />
  ));

  return (
    <Wrapper>
      <Header />
      <Content>
        <PageIntroduction>
          <h1>Events</h1>
        </PageIntroduction>
        <List>
          {friendEventItems}
        </List>
      </Content>
      <BottomNav />
    </Wrapper>
  );
};

export default EventListPage;
