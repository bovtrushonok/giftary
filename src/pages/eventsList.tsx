import React from 'react';
import { iFriendEventList } from '../types/interfaces';
import { Header, BottomNav, FriendEvent } from '../components/index';
import {
  Wrapper, Content, PageIntroduction, List,
} from '../sharedViews/index';

const EventListPage: React.FC<iFriendEventList> = ({ friendEvents }) => {
  const friendEventItems = friendEvents.map((ev) => (
    <FriendEvent
      friendName={ev.friendName}
      friendAvatar={ev.friendAvatar}
      eventName={ev.eventName}
      eventDay={ev.eventDay}
      eventMonth={ev.eventMonth}
      id={ev.id}
    />
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
