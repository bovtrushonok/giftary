import React from 'react';
import { FriendGiftListItem, GiftWrapper } from '../sharedViews/listItem';
import { Input } from '../sharedViews/input';
import { iFriendGiftProps } from '../types/interfaces';

export const FriendsGift: React.FC<iFriendGiftProps> = ({
  giftName, giftLink, giftDescription,
} : iFriendGiftProps) => (
  <FriendGiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
    <Input width="10%" height="20px" display="flex" margin="0" type="checkbox" />
  </FriendGiftListItem>
);
