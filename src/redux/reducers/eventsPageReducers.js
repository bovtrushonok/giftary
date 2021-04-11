const initialState = {
  friendsEventsList: [
    {
      friendName: 'good friend',
      friendAvatar: '🐞',
      eventName: 'First event',
      eventDay: '26',
      eventMonth: 'March',
      id: '0',
    },
    {
      friendName: 'another friend',
      friendAvatar: '🐞',
      eventName: 'second event',
      eventDay: '26',
      eventMonth: 'April',
      id: '1',
    },
  ],
};

export const eventsReducer = (state = initialState, action) => state;
