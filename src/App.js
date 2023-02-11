import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import * as userApi from './apis/user-api';
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
  // // update cart to server because of refreshing
  // const cartItems = useSelector(state => state.user.cart);
  // const isCartItemValid = cartItems.length !== 0;
  // useEffect(() => {
  //   if (getAccessToken() && isCartItemValid) {
  //     const postCartDataToDatabase = async () => {
  //       try {
  //         const res = await userApi.addMyCart(cartItems);
  //         console.log(res.data.message);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };
  //     return () => {
  //       console.log('need to update cart to server because of refreshing');
  //       postCartDataToDatabase()
  //     }
  //   }
  // });

  return (
    <>
      <Router />
    </>
  );
}

export default App;