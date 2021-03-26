import styled from 'styled-components';
import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import List from "../partials/list";
import { ListItem, GiftListItem }  from "../partials/listItem";
import SwitchComponent from "../partials/switcher";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const IconWrapper = styled.div `
  display: flex;
  flex-flow: column wrap;
  justify-items: flex-start;
  align-items: flex-end;
  width: 25%;
  position: fixed;
  bottom: 100px;
  right: 20%;

  @media screen and (max-width: 500px) {
    width: 65%;
  }

  @media screen and (max-width: 700px) {
    width: 50%;
  }

  span {
    display: none;
    font-style: italic;
    color: #1a237e;
  }

  svg {
    font-size: 4em;
    color: #1a237e;
    display: flex;
    align-self: flex-end;
  }
  svg:hover {
    color: #3949ab;
    cursor: pointer;
  }

  svg:hover + span {
    display: inline-block;
  }
`;

const ProfilePage = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <SwitchComponent />
        <List> 
          <ListItem> 
            <GiftListItem>
              <div>
                <span>First gift</span>
                <span>Link</span>
                <span>Description</span>
              </div>
            </GiftListItem>
          </ListItem>
        </List>
        <IconWrapper>
          <AddBoxRoundedIcon />
          <span>Add gifts to your wish list</span>
        </IconWrapper>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default ProfilePage;