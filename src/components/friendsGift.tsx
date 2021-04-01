import React from 'react';
import { FriendGiftListItem, GiftWrapper } from '../sharedViews/listItem';
import { Input } from '../sharedViews/input';

interface Props {
  giftName: string,
  giftLink: string,
  giftDescription: string,
}

export const FriendsGift: React.FC<Props> = ({ giftName, giftLink, giftDescription } : Props) => (
  <FriendGiftListItem>
    <GiftWrapper>
      <span>{giftName}</span>
      <span>{giftLink}</span>
      <span>{giftDescription}</span>
    </GiftWrapper>
    <Input width="10%" height="20px" display="flex" margin="0" type="checkbox" />
  </FriendGiftListItem>
);
