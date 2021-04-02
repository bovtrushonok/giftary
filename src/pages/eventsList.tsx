import React from 'react';
import { iFriendEventList } from '../types/interfaces';
import { Header } from '../components/header';
import { BottomNav } from '../components/bottomNav';
import { FriendEvent } from '../components/friendEvent';
import { Wrapper } from '../sharedViews/wrapper';
import { Content } from '../sharedViews/contentWrap';
import { PageIntroduction } from '../sharedViews/pageIntroduction';
import { List } from '../sharedViews/list';

const EventListPage: React.FC<iFriendEventList> = ({ friendEvents }: iFriendEventList) => {
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
