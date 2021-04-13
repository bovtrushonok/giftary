import React from 'react';
import { IMyGiftsProps, IGiftProps } from '../types';
import { MyGift } from '.';

export const Gifts: React.FC<IMyGiftsProps> = ({ gifts, editItem, deleteItem }) => {
  const giftItems = gifts.map((g: IGiftProps) => (
    <MyGift {...g} editItem={editItem} deleteItem={deleteItem} key={g.id} />
  ));

  return (
    <>
      {giftItems}
    </>
  );
};
