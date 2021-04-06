/* ------commons------ */
export interface IAvatarProps {
  friendAvatar: String;
}

export interface IEventProps {
  eventName: string;
  eventDay: string;
  eventMonth: string;
  id: string;
}

export interface IGiftProps {
  giftName: string;
  giftLink: string;
  giftDescription: string;
  id: string;
}

export interface IFriendGiftProps {
  giftName: string,
  giftLink: string,
  giftDescription: string,
}

/* ------EventssListPage------ */
export interface IFriendEventProps {
  friendName: string;
  friendAvatar: string;
  eventName: string;
  eventDay: string;
  eventMonth: string;
  id: string;
}

export interface IFriendEventList {
  friendEvents: Array<IFriendEventProps>
}

/* ------FriendsListPage------ */
export interface IFriendProps {
  friendName: string;
  friendAvatar: string;
  id: string;
}

export interface IFriendsPageProps {
  friends: Array<IFriendProps>
}

/* ------ProfilePage------ */
export interface IProfileProps {
  events: Array<IEventProps>;
  gifts: Array<IGiftProps>;
  mode: string;
  addMode: string;
  dispatch: any;
  newEvent: IEventProps;
  newGift: IGiftProps;
}

export interface ISwitcher {
  dispatch: any;
}

/* ------ModalWindows------ */
export interface IGiftModal {
  dispatch: any;
  newGift: IGiftProps;
}

export interface IEventModal {
  dispatch: any;
  newEvent: IEventProps;
}

export interface IOpenModal {
  dispatch: any;
}
