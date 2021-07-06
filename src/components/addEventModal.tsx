import React, { useReducer } from 'react';
import { IEventModal, IInitStateEvents, IModalAction } from '../types';
import {
  Modal, Button, Input, Overlay,
} from '../sharedViews';

const initialState: IInitStateEvents = {
  eventName: '',
  eventDay: '',
  eventMonth: '',
};

function reducer(state: IInitStateEvents, action: IModalAction) {
  return {
    ...state,
    [action.id]: action.value,
  };
}

export const AddEventModal: React.FC<IEventModal> = ({ addEvent, closeModalWindow }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch({ id: e.currentTarget.id, value: e.currentTarget.value });
  }

  function onAddEvent() {
    return addEvent(state);
  }

  function onCloseModalWindow(event: React.SyntheticEvent) {
    if (event.target === event.currentTarget) return closeModalWindow();
  }

  return (
    <Overlay onClick={onCloseModalWindow}>
      <Modal>
        <Input id="eventName" type="text" placeholder="Event" onChange={handleChange} value={state.eventName} />
        <Input id="eventDay" type="text" placeholder="Add day as DD" onChange={handleChange} value={state.eventDay} />
        <Input id="eventMonth" type="text" placeholder="Add month as MM" onChange={handleChange} value={state.eventMonth} />
        <Button onClick={onAddEvent}> Add event </Button>
      </Modal>
    </Overlay>
  );
};
