import useRoutes from './routes';

const App = () => {
  const routes = useRoutes(true);
  return (
    <>
      {routes}
    </>
  );
}

export default App;
