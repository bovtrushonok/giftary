import { BottomNav } from '../components/bottomNav';
import { Header } from '../components/header';
import { Content } from '../sharedViews/contentWrap';
import { Wrapper } from '../sharedViews/wrapper';

const MainPage = () => (
  <>
    <Wrapper>
      <Content>
        <Header />
        <BottomNav />
      </Content>
    </Wrapper>
  </>
);

export default MainPage;
