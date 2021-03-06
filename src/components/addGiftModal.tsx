import React from 'react';
import { IGiftModal } from '../types';
import {
  addGiftActionCreator, addNewGiftNameActionCreator, addNewGiftLinkActionCreator,
  addNewGiftDescriptionActionCreator, closeModalActionCreator,
} from '../redux/actions';
import {
  Modal, Button, TextArea, Input, InputBlock, Overlay,
} from '../sharedViews';

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

  function closeModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return dispatch(closeModalActionCreator());
  }

  return (
    <Overlay onClick={closeModalWindow}>
      <Modal>
        <InputBlock modal>
          <Input id="giftName" type="text" placeholder="Gift" value={newGift.giftName} onChange={changeGiftName} />
          <Input id="giftLink" type="text" placeholder="Link" value={newGift.giftLink} onChange={changeGiftLink} />
        </InputBlock>
        <TextArea placeholder="Description" value={newGift.giftDescription} onChange={changeGiftDescription} />
        <Button onClick={addGift}>Add gift</Button>
      </Modal>
    </Overlay>
  );
};
