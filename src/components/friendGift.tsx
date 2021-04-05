import React from 'react';
import { iFriendGiftProps } from '../types/interfaces';
import { FriendGiftListItem, GiftWrapper, Input } from '../sharedViews/index';

export const FriendGift: React.FC<iFriendGiftProps> = ({
  giftName, giftLink, giftDescription,
}) => (
  <FriendGiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
    <Input width="10%" height="20px" display="flex" margin="0" type="checkbox" />
  </FriendGiftListItem>
);
