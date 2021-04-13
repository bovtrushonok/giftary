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
