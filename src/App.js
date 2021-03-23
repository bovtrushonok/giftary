import useRoutes from './routes';
import 'materialize-css';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: rgb(94,73,133);
  background: linear-gradient(180deg, rgba(94,73,133,1) 0%, rgba(194,128,210,1) 70%, rgba(236,231,236,1) 100%);
`;

function App() {
  const routes = useRoutes(false);
  return (
    <AppWrapper>
      {routes}
    </AppWrapper>
  );
}

export default App;
