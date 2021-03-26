import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-items: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 7px;
  border-radius: 10px;
  background-color: #e8eaf6;
`;

const GiftListItem = styled(ListItem)`
  div {
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

export { ListItem, GiftListItem } ;