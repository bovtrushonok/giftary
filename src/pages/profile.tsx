import React from 'react';
import { IProfileProps } from '../types';
import {
  Header, BottomNav, SwitchComponent, MyEvent, MyGift, AddEventModal, AddGiftModal, OpenModalButton,
} from '../components';
import {
  Wrapper, Content, List,
} from '../sharedViews';

const ProfilePage: React.FC<IProfileProps> = ({
  events, gifts, mode, addMode, dispatch, newEvent, newGift,
}) => {
  const giftItems = gifts.map((g) => (
    <MyGift {...g} />
  ));

  const eventItems = events.map((item) => (
    <MyEvent {...item} />
  ));

  const addGiftMode = addMode === 'true' && mode === 'onGift';
  const addEventMode = addMode === 'true' && mode === 'onEvent';

  return (
    <>
      {addGiftMode && <AddGiftModal dispatch={dispatch} newGift={newGift} />}
      {addEventMode && <AddEventModal dispatch={dispatch} newEvent={newEvent} />}
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
