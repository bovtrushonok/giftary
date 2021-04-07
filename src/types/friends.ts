export interface IFriendProps {
  friendName: string;
  friendAvatar: string;
  id: string;
}

export interface IFriendsPageProps {
  friends: Array<IFriendProps>
}
