import styled from 'styled-components';
import * as color from '../constants/colors.ts';

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  margin: 7px auto;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: ${color.primaryBc};
`;

const GiftWrapper = styled.div`
  min-width: 60%;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  justify-items: space-around;
  
  span {
    font-size: 17px;
    color: ${color.secondaryDarkenText};
  }

  span + span {
    font-size: 13px;
    color: ${color.secondaryLightText};
  }

  span:last-child {
    font-size: 15px;
    color: ${color.secondaryText};
  }
`;

const GiftListItem = styled(ListItem)`
  &:hover {
    svg {
      display: inline-block;
    }
  }
`;

const FriendGiftListItem = styled(GiftListItem)`
  justify-content: space-between;
`;

const DateBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-self: flex-end;
  alignn-self: center;
  align-content: center;
  justify-items: flex-end;
  width: 40%;

  p {
    font-size: 25px;
    color: ${color.accentRedText};
    margin: 0;
    padding: 0;
  }

  p + p {
    font-size: 15px;
    color: ${color.accentRedText};
  }
`;

const EventListItem = styled(ListItem)`
  flex-flow: row wrap;

  span {
    font-size: 19px;
    color: ${color.secondaryDarkenText};
    width: 50%;
  }

  div + p {
    display: flex;
    justify-self: flex-start;
    font-size: 15px;
    color: ${color.secondaryLightText};
    padding: 0;
    margin: 0;
    width: 30%;
  }

  &:hover {
    svg {
      display: inline-block;
    }
  }
`;

export {
  ListItem, GiftListItem, GiftWrapper, EventListItem, DateBlock, FriendGiftListItem,
};
