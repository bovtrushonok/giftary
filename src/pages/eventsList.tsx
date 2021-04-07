import React from 'react';
import { IFriendEventList } from '../types/interfaces';
import { Header, BottomNav, FriendEvent } from '../components';
import {
  Wrapper, Content, PageIntroduction, List,
} from '../sharedViews';

const EventListPage: React.FC<IFriendEventList> = ({ friendEvents }) => {
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
