import styled from 'styled-components';
import * as color from '../constants/colors';

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-items: space-between;
  align-items: center;
  width: 100%;
  margin: 7px auto;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: ${color.primaryBc};
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
    color: ${color.secondaryDText};
  }

  span + span {
    font-size: 0.9em;
    color: ${color.secondaryLText};
  }

  span:last-child {
    font-size: 1em;
    color: ${color.secondaryText};
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
    color: ${color.secondaryDText};
    width: 50%;
  }

  div + p {
    display: flex;
    align-self: flex-start;
    font-size: 0.9em;
    color: ${color.secondaryLText};
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
    color: ${color.accentRedText};
  }

  div > div > span + span {
    font-size: 0.9em;
    color: ${color.accentRedText};
  }
`;

export { ListItem, GiftListItem, EventListItem, FriendGiftListItem };