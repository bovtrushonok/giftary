import React from 'react';
import { IGiftModal } from '../types/interfaces';
import {
  addGiftActionCreator, addNewGiftNameActionCreator, addNewGiftLinkActionCreator,
  addNewGiftDescriptionActionCreator,
} from '../redux/profilePageReducers';
import {
  Modal, Button, TextArea, Input, InputBlock,
} from '../sharedViews/index';

export const AddGiftModal: React.FC<IGiftModal> = ({ dispatch, newGift }) => {
  const addGift = () => dispatch(addGiftActionCreator());

  function changeGiftName(e: React.FormEvent<HTMLInputElement>) {
    dispatch(addNewGiftNameActionCreator(e.currentTarget.value));
  }

  function changeGiftLink(e: React.FormEvent<HTMLInputElement>) {
    dispatch(addNewGiftLinkActionCreator(e.currentTarget.value));
  }

  function changeGiftDescription(e: React.FormEvent<HTMLTextAreaElement>) {
    dispatch(addNewGiftDescriptionActionCreator(e.currentTarget.value));
  }

  return (
    <Modal>
      <InputBlock>
        <Input id="giftName" type="text" placeholder="Gift" value={newGift.giftName} onChange={changeGiftName} />
        <Input id="giftLink" type="text" placeholder="Link" value={newGift.giftLink} onChange={changeGiftLink} />
      </InputBlock>
      <TextArea placeholder="Description" value={newGift.giftDescription} onChange={changeGiftDescription} />
      <Button onClick={addGift}>Add gift</Button>
    </Modal>
  );
};
