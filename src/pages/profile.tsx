import React from 'react';
import { IProfileProps } from '../types/interfaces';
import {
  Header, BottomNav, SwitchComponent, MyEvent, MyGift, AddEventModal, AddGiftModal, OpenModalButton,
} from '../components/index';
import {
  Wrapper, Content, List,
} from '../sharedViews/index';

const ProfilePage: React.FC<IProfileProps> = ({
  events, gifts, mode, addMode, dispatch, newEvent, newGift,
}) => {
  const giftItems = gifts.map((g) => (
    <MyGift
      giftName={g.giftName}
      giftLink={g.giftLink}
      giftDescription={g.giftDescription}
      id={g.id}
    />
  ));

  const eventItems = events.map((item) => (
    <MyEvent
      eventName={item.eventName}
      eventDay={item.eventDay}
      eventMonth={item.eventMonth}
      id={item.id}
    />
  ));

  return (
    <>
      {addMode === 'true' && mode === 'onGift' && <AddGiftModal dispatch={dispatch} newGift={newGift} />}
      {addMode === 'true' && mode === 'onEvent' && <AddEventModal dispatch={dispatch} newEvent={newEvent} />}
      {addMode === 'false' && (
      <Wrapper>
        <Content>
          <Header />
          <SwitchComponent dispatch={dispatch} />
          <List>
            {mode === 'onGift' && giftItems}
            {mode === 'onEvent' && eventItems}
            <OpenModalButton dispatch={dispatch} />
          </List>
        </Content>
        <BottomNav />
      </Wrapper>
      )}
    </>
  );
};

export default ProfilePage;
