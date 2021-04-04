import React from 'react';
import { iModalProps } from '../types/interfaces';
import { addGiftActionCreator } from '../redux/profilePageReducers';
import { Modal } from '../sharedViews/modal';
import { Button } from '../sharedViews/button';
import { TextArea } from '../sharedViews/textArea';
import { Input } from '../sharedViews/input';
import { InputBlock } from '../sharedViews/form';

export const AddGiftModal: React.FC<iModalProps> = ({ dispatch }: any) => {
  const giftNameInput: any = React.createRef();
  const giftLinkInput: any = React.createRef();
  const giftDescriptionTextarea: any = React.createRef();

  const addGift = () => {
    const giftName = giftNameInput.current.value;
    const giftLink = giftLinkInput.current.value;
    const giftDescription = giftDescriptionTextarea.current.value;

    return dispatch(addGiftActionCreator(giftName, giftLink, giftDescription));
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
