const initialState = {
  friendsData: [
    { friendName: 'good friend', friendAvatar: '🐞', id: '0' },
    { friendName: 'another good friend', friendAvatar: '🐞', id: '1' },
  ],
};

export const friendsReducer = (state = initialState, action) => state;
