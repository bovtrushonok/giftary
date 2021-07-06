import React, { useReducer } from 'react';
import { IGiftModal, IInitStateGifts, IModalAction } from '../types';
import {
  Modal, Button, TextArea, Input, InputBlock, Overlay,
} from '../sharedViews';

const initialState: IInitStateGifts = {
  giftName: '',
  giftLink: '',
  giftDescription: '',
};

function reducer(state: IInitStateGifts, action: IModalAction) {
  return {
    ...state,
    [action.id]: action.value,
  };
}

export const AddGiftModal: React.FC<IGiftModal> = ({ addGift, closeModalWindow }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onAddGift() {
    addGift(state);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>|React.FormEvent<HTMLTextAreaElement>) {
    return dispatch({ id: e.currentTarget.id, value: e.currentTarget.value });
  }

  function onCloseModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return closeModalWindow();
  }

  return (
    <Overlay onClick={onCloseModalWindow}>
      <Modal>
        <InputBlock modal>
          <Input id="giftName" type="text" placeholder="Gift" value={state.giftName} onChange={handleChange} />
          <Input id="giftLink" type="text" placeholder="Link" value={state.giftLink} onChange={handleChange} />
        </InputBlock>
        <TextArea placeholder="Description" id="giftDescription" value={state.giftDescription} onChange={handleChange} />
        <Button onClick={onAddGift}>Add gift</Button>
      </Modal>
    </Overlay>
  );
};
