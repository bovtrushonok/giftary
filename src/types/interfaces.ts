export interface iAvatarProps {
  friendAvatar: String;
}

export interface iFriendProps {
  friendName: string;
  friendAvatar: string;
  id: string;
}

export interface iFriendGiftProps {
  giftName: string,
  giftLink: string,
  giftDescription: string,
}

export interface iFriendEventProps {
  friendName: string;
  friendAvatar: string;
  eventName: string;
  eventDay: string;
  eventMonth: string;
  id: string;
}

export interface iFriendEventList {
  friendEvents: Array<iFriendEventProps>
}

export interface eventProps {
  eventName: string;
  eventDay: string;
  eventMonth: string;
  id: string;
}

export interface giftProps {
  giftName: string;
  giftLink: string;
  giftDescription: string;
  id: string;
}

export interface iFriendsListProps {
  friends: Array<iFriendProps>
}

export interface IProfileProps {
  events: Array<eventProps>;
  gifts: Array<giftProps>;
  mode: string;
  addMode: string;
  dispatch: any;
  newEvent: eventProps;
  newGift: giftProps;
}

export interface iState {
  profilePage: IProfileProps;
  friendsPage: iFriendsListProps;
  eventsPage: iFriendEventList;
}

export interface IGiftModal {
  dispatch: any;
  newGift: giftProps;
}

export interface IEventModal {
  dispatch: any;
  newEvent: eventProps;
}
