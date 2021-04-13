import React from 'react';
import { IMyEventsProps, IEventProps } from '../types';
import { MyEvent } from '.';

export const Events: React.FC<IMyEventsProps> = ({ events, editItem, deleteItem }) => {
  const eventItems = events.map((item: IEventProps) => (
    <MyEvent {...item} editItem={editItem} deleteItem={deleteItem} key={item.id} />
  ));

  return (
    <>
      {eventItems}
    </>
  );
};
