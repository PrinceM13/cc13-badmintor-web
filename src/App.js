import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from "./routes/Router";
import { fetchAuthUser } from './redux/auth-action';
import { getAccessToken } from './utils/local-storage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { if (getAccessToken()) { dispatch(fetchAuthUser()) } }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;