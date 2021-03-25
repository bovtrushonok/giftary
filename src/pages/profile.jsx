import Header from "../partials/header";
import BottomNav from '../partials/bottomNav';
import { Wrapper } from "../partials/wrapper";
import { Content } from "../partials/content";
import styled from 'styled-components';

const Switch = styled.label`
  position: relative;
  width: 65%;
  height: 94px;
  margin: 15px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 0 7px;
    margin: 0 auto;
    color: #757575;
  }
  
  input:checked + span {
    color: #424242;
  }

  @media screen and (max-width: 510px) {
    width: 95%;
  }

  @media screen and (min-width: 950px) {
    width: 65%;
  }

`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + span:before {
    transform: translateX(100%);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  z-index: -1;
  &:before {
    position: absolute;
    content: "";
    height: 95%;
    width: 50%;
    left: 4px;
    bottom: 4px;
    border-radius: 34px;
    background-color: white;
    transition: .4s;
  }
  
`;

const ProfilePage = () => {
  return (
    <Wrapper>
      <Content>
        <Header />
        <div>
          <Switch>
            <span>My gifts &#127873;</span>
            <span>My events &#127881;</span>
            <Input type="checkbox"/>
            <Slider/>
          </Switch>
        </div>
      </Content>
      <BottomNav />
    </Wrapper>
  )
}

export default ProfilePage;