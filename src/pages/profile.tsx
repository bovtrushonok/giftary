import React from 'react';
import { IProfileProps } from '../types';
import {
  AddEventModalContainer, AddGiftModalContainer, OpenModalButtonContainer, SwitcherContainer,
} from '../containers';
import {
  Header, BottomNav, MyEvent, MyGift,
} from '../components';
import {
  Wrapper, Content, List,
} from '../sharedViews';

export const ProfilePage: React.FC<IProfileProps> = ({
  events, gifts, mode, addMode, dispatch,
}) => {
  const giftItems = gifts.map((g) => (
    <MyGift {...g} />
  ));

  const eventItems = events.map((item) => (
    <MyEvent {...item} />
  ));

  const addGiftMode = addMode === 'true' && mode;
  const addEventMode = addMode === 'true' && !mode;

  return (
    <>
      {addGiftMode && <AddGiftModalContainer />}
      {addEventMode && <AddEventModalContainer />}
      {addMode === 'false' && (
      <Wrapper>
        <Content>
          <Header />
          <SwitcherContainer />
          <List>
            {mode && giftItems}
            {!mode && eventItems}
            <OpenModalButtonContainer />
          </List>
        </Content>
        <BottomNav />
      </Wrapper>
      )}
    </>
  );
};
