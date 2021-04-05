import React from 'react';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { profileProps } from '../types/interfaces';
import {
  Header, BottomNav, SwitchComponent, MyEvent, MyGift, AddEventModal, AddGiftModal,
} from '../components/index';
import {
  Wrapper, Content, List, IconWrapper,
} from '../sharedViews/index';

const ProfilePage: React.FC<profileProps> = ({
  events, gifts, mode, addMode, dispatch,
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
      {addMode === 'true' && mode === 'onGift' && <AddGiftModal dispatch={dispatch} />}
      {addMode === 'true' && mode === 'onEvent' && <AddEventModal dispatch={dispatch} />}
      {addMode === 'false' && (
      <Wrapper>
        <Content>
          <Header />
          <SwitchComponent />
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
