import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Router from "./routes/Router";
import { fetchAuthUser } from './redux/auth-action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchAuthUser()) }, []);

  return (
    <>
      <div className="text-3xl font-bold underline">Badminter App</div>
      <Router />
    </>
  );
}

export default App;