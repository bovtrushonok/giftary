import React from 'react';
import { IMyEventsProps, IEventProps } from '../types';
import { MyEvent } from './myEvent';

export const Events: React.FC<IMyEventsProps> = ({ events }) => (
  <>
    {
         events.map((item: IEventProps) => (
           <MyEvent {...item} key={item.id} />
         ))
      }
  </>
);
