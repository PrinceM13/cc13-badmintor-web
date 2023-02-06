import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from "./routes/Router";
import { fetchAuthUser } from './redux/auth-action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchAuthUser()) }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;