import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Router from "./routes/Router";
import { fetchAuthUser } from './redux/auth-action';
import { getMyCart } from './redux/user-action';
import { getAccessToken } from './utils/local-storage';

function App() {
  const dispatch = useDispatch();

  // user info
  useEffect(() => { if (getAccessToken()) { dispatch(fetchAuthUser()) } }, []);
  // user cart
  useEffect(() => { if (getAccessToken()) { dispatch(getMyCart()) } }, [useSelector(state => state.auth.authenticatedUser)]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;