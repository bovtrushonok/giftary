import useRoutes from './routes';

const App = () => {
  const routes = useRoutes(true);
  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
