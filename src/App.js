import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from "./routes/Router";
import { fetchAuthUser } from './redux/auth-action';
import { fetchAllProducts } from './redux/visitor-action';
import { getAccessToken } from './utils/local-storage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) { dispatch(fetchAuthUser()) }
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;