import React, { createRef } from 'react';
import { iModalProps } from '../types/interfaces';
import { addGiftActionCreator } from '../redux/profilePageReducers';
import {
  Modal, Button, TextArea, Input, InputBlock,
} from '../sharedViews/index';

export const AddGiftModal: React.FC<iModalProps> = ({ dispatch }: any) => {
  const giftNameInput = createRef<HTMLInputElement>();
  const giftLinkInput = createRef<HTMLInputElement>();
  const giftDescriptionTextarea = createRef<HTMLTextAreaElement>();

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

    return undefined;
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
