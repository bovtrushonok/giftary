export interface IAvatarProps {
  friendAvatar: String;
}

type DispatchWithParameters = (p: string) => any;

export interface IEventProps {
  eventName: string;
  eventDay: string;
  eventMonth: string;
  id: string;
  editItem: DispatchWithParameters,
  deleteItem: DispatchWithParameters,
}

export interface IGiftProps {
  giftName: string;
  giftLink: string;
  giftDescription: string;
  id: string;
  editItem: DispatchWithParameters;
  deleteItem: DispatchWithParameters;
}

export interface IMyGiftsProps {
  gifts: Array<IGiftProps>;
  editItem: DispatchWithParameters;
  deleteItem: DispatchWithParameters;
}

export interface IMyEventsProps {
  events: Array<IEventProps>;
  editItem: DispatchWithParameters;
  deleteItem: DispatchWithParameters;
}

export interface IFriendGiftProps {
  giftName: string;
  giftLink: string;
  giftDescription: string;
  id: string;
}

export interface IModalAction {
  id: string,
  value: string;
}
