import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/organism/layout';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Element }) => (
            <Route path={path} element={<Element />} key={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
