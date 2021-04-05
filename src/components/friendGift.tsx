import React from 'react';
import { iFriendGiftProps } from '../types/interfaces';
import { FriendGiftListItem, GiftWrapper, InputCheckbox } from '../sharedViews/index';

export const FriendGift: React.FC<iFriendGiftProps> = ({
  giftName, giftLink, giftDescription,
}) => (
  <FriendGiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
    <InputCheckbox />
  </FriendGiftListItem>
);
