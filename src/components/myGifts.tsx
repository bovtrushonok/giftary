import React from 'react';
import { IMyGiftsProps, IGiftProps } from '../types';
import { MyGift } from './myGift';

export const Gifts: React.FC<IMyGiftsProps> = ({ gifts }) => (
  <>
    {
      gifts.map((g: IGiftProps) => <MyGift {...g} key={g.id} />)
    }
  </>
);
