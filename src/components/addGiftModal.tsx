import React, { useState } from 'react';
import { IGiftModal } from '../types';
import {
  Modal, Button, TextArea, Input, InputBlock, Overlay,
} from '../sharedViews';

export const AddGiftModal: React.FC<IGiftModal> = ({ addGift, closeModalWindow }) => {
  const [giftName, setGiftName] = useState('');
  const [giftLink, setGiftLink] = useState('');
  const [giftDescription, setGiftDescription] = useState('');

  function onAddGift() {
    addGift(giftName, giftLink, giftDescription);
  }

  function onChangeGiftName(e: React.FormEvent<HTMLInputElement>) {
    setGiftName(e.currentTarget.value);
  }

  function onChangeGiftLink(e: React.FormEvent<HTMLInputElement>) {
    setGiftLink(e.currentTarget.value);
  }

  function onChangeGiftDescription(e: React.FormEvent<HTMLTextAreaElement>) {
    setGiftDescription(e.currentTarget.value);
  }

  function onCloseModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return closeModalWindow();
  }

  return (
    <Overlay onClick={onCloseModalWindow}>
      <Modal>
        <InputBlock modal>
          <Input id="giftName" type="text" placeholder="Gift" value={giftName} onChange={onChangeGiftName} />
          <Input id="giftLink" type="text" placeholder="Link" value={giftLink} onChange={onChangeGiftLink} />
        </InputBlock>
        <TextArea placeholder="Description" value={giftDescription} onChange={onChangeGiftDescription} />
        <Button onClick={onAddGift}>Add gift</Button>
      </Modal>
    </Overlay>
  );
};
