import React from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { IProfileProps } from '../types/interfaces';
import {
  Header, BottomNav, SwitchComponent, MyEvent, MyGift, AddEventModal, AddGiftModal,
} from '../components/index';
import {
  Wrapper, Content, List, IconWrapper,
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
          </List>
          <IconWrapper>
            <AddBoxRoundedIcon />
            <span>Add gifts to your wish list</span>
          </IconWrapper>
        </Content>
        <BottomNav />
      </Wrapper>
      )}
    </>
  );
};

export default ProfilePage;
