import React from 'react';
import { IFriendGiftProps } from '../types/interfaces';
import { FriendGiftListItem, GiftWrapper, InputCheckbox } from '../sharedViews';

export const FriendGift: React.FC<IFriendGiftProps> = ({
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
