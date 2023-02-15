import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    user: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setData, setUser } = slice.actions;
export default slice.reducer;

// -----

import axios from 'axios';
import { setData } from './slice';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/data');
    dispatch(setData(response.data));
  } catch (error) {
    console.error(error);
  }
};

// -----

import { setUser } from './slice';

export const setAuthUser = (user) => (dispatch) => {
  dispatch(setUser(user));
};

// -----

import React from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from './actions';

const Component = () => {
  const data = useSelector((state) => state.data.data);
  const user = useSelector((state) => state.data.user);

  React.useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

// export default Component;

// -----

// login

import axios from 'axios';
import { setUser } from './slice';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', {
      username,
      password,
    });
    dispatch(setUser(response.data));
  } catch (error) {
    console.error(error);
  }
};

// -----

import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

// export default LoginForm;

// -----

// 2nd action

dispatch(addTodo(newTodo), () => {
    console.log('The todo has been added');
  });

// -----

// thunk

dispatch((dispatch, getState) => {
    setTimeout(() => {
      dispatch(addTodo(newTodo));
    }, 1000);
  });

// -----