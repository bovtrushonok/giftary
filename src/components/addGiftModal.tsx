import React from 'react';
import { iModalProps } from '../types/interfaces';
import { addGiftActionCreator } from '../redux/profilePageReducers';
import {
  Modal, Button, TextArea, Input, InputBlock,
} from '../sharedViews/index';

export const AddGiftModal: React.FC<iModalProps> = ({ dispatch }) => {
  const giftNameInput = React.createRef<HTMLInputElement | null>();
  const giftLinkInput = React.createRef<HTMLInputElement | null>();
  const giftDescriptionTextarea = React.createRef<HTMLTextAreaElement | null>();

  const addGift = () => {
    const currentGiftName = giftNameInput.current;
    const currentGiftLink = giftLinkInput.current;
    const currentGiftDescription = giftDescriptionTextarea.current;

    if (currentGiftDescription && currentGiftLink && currentGiftName) {
      const giftName = currentGiftName.value;
      const giftLink = currentGiftLink.value;
      const giftDescription = currentGiftDescription.value;

      return dispatch(addGiftActionCreator(giftName, giftLink, giftDescription));
    }
  };

  return (
    <Modal>
      <InputBlock>
        <Input id="giftName" type="text" placeholder="Gift" ref={giftNameInput} />
        <Input id="giftLink" type="text" placeholder="Link" ref={giftLinkInput} />
      </InputBlock>
      <TextArea placeholder="Description" ref={giftDescriptionTextarea} />
      <Button onClick={addGift}>Add gift</Button>
    </Modal>
  );
};
