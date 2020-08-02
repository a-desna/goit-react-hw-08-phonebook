import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './authActions';

const initialState = {
  name: null,
  email: null,
};

const user = createReducer(initialState, {
  [authActions.registerSuccess]: (state, { payload }) => payload.user,
  [authActions.loginSuccess]: (state, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload.token,
  [authActions.loginSuccess]: (state, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerFailure]: (state, { payload }) => payload,
  [authActions.loginFailure]: (state, { payload }) => payload,
  [authActions.logoutFailure]: (state, { payload }) => payload,
  [authActions.getCurrentUserFailure]: (state, { payload }) => payload.user,
  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logoutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
});

export default combineReducers({
  user,
  token,
  error,
});
