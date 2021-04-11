import React from 'react';
import { IGiftModal } from '../types';
import {
  Modal, Button, TextArea, Input, InputBlock, Overlay,
} from '../sharedViews';

export const AddGiftModal: React.FC<IGiftModal> = ({
  addGift, changeGiftName, changeGiftLink, changeGiftDescription, closeModalWindow, newGift,
}) => {
  function onAddGift() {
    addGift();
  }

  function onChangeGiftName(e: React.FormEvent<HTMLInputElement>) {
    changeGiftName(e.currentTarget.value);
  }

  function onChangeGiftLink(e: React.FormEvent<HTMLInputElement>) {
    changeGiftLink(e.currentTarget.value);
  }

  function onChangeGiftDescription(e: React.FormEvent<HTMLTextAreaElement>) {
    changeGiftDescription(e.currentTarget.value);
  }

  function onCloseModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return closeModalWindow();
  }

  return (
    <Overlay onClick={onCloseModalWindow}>
      <Modal>
        <InputBlock modal>
          <Input id="giftName" type="text" placeholder="Gift" value={newGift.giftName} onChange={onChangeGiftName} />
          <Input id="giftLink" type="text" placeholder="Link" value={newGift.giftLink} onChange={onChangeGiftLink} />
        </InputBlock>
        <TextArea placeholder="Description" value={newGift.giftDescription} onChange={onChangeGiftDescription} />
        <Button onClick={onAddGift}>Add gift</Button>
      </Modal>
    </Overlay>
  );
};
