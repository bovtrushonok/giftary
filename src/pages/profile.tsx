import React from 'react';
import { IProfileProps } from '../types';
import {
  AddEventModalContainer, AddGiftModalContainer, EventsContainer,
  OpenModalButtonContainer, SwitcherContainer,
} from '../containers';
import { Header, BottomNav } from '../components';
import { Wrapper, Content, List } from '../sharedViews';
import { GiftsContainer } from '../containers/giftsContainer';

export const ProfilePage: React.FC<IProfileProps> = ({
  mode, addMode,
}) => {
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
            {mode && <GiftsContainer />}
            {!mode && <EventsContainer />}
            <OpenModalButtonContainer />
          </List>
        </Content>
        <BottomNav />
      </Wrapper>
      )}
    </>
  );
};
