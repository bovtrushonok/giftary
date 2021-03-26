import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-items: space-between;
  align-items: center;
  width: 100%;
  margin: 7px auto;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: #e8eaf6;
`;

const GiftListItem = styled(ListItem)`
  div {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: space-between;
  }

  div > div {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-items: space-around;
  }
  
  span {
    font-size: 1.2em;
    color: #212121;
  }

  span + span {
    font-size: 0.9em;
    color: #616161;
  }

  span:last-child {
    font-size: 1em;
    color: #424242;
  }
`;

const FriendGiftListItem = styled(GiftListItem)`
  input {
    display: flex;
    justify-self: flex-end;
    width: 10%;
    height: 1.5em;
  }
`;

const EventListItem = styled(ListItem)`
  div {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 1.2em;
    color: #212121;
    width: 50%;
  }

  div + p {
    display: flex;
    align-self: flex-start;
    font-size: 0.9em;
    color: #616161;
    padding: 0;
    margin: 0;
  }

  div > div {
    display: flex;
    flex-flow: column wrap;
    justify-self: flex-end;
    align-items: flex-end;
    width: 50%;
  }

  div > div > span {
    font-size: 1.3em;
    color: #d32f2f;
  }

  div > div > span + span {
    font-size: 0.9em;
    color: #d32f2f;
  }
`;

export { ListItem, GiftListItem, EventListItem, FriendGiftListItem } ;