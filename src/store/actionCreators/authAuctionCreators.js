import axios from 'axios';
import { createAsyncActionCreator } from '.';
import ActionTypes, { setBearerToken, requestStates, removeBearerToken } from '../../utils/store';

import * as authRequests from '../requests/authRequests';

/**
 * Sign up a user and return a user object and a bearer token
 * @param {*} email
 * @param {*} password
 * @param {*} firstName
 * @param {*} lastName
 */
export function signUpUser(email, password, name, config = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.AUTH_USER,
    () => authRequests.signUpUserRequest(email, password, name),
    {
      successCallback: (response) => {
        if (response.data.token) {
          setBearerToken(response.data.token);
          if (config.successCallback) config.successCallback();
        }
      },
      responseSubfield: 'user',
    },
  );
}

/**
 * A function that takes a email and a password and sends them to the backend server for authentication
 * If authentication succeeds, the provided token will be placed locally and the user's
 * authentication status will be updated
 * @param {*} email
 * @param {*} password
 */
export function signInUser(email, password, config = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.AUTH_USER,
    () => authRequests.signInUserRequest(email, password),
    {
      successCallback: (response) => {
        if (response.data.token) {
          setBearerToken(response.data.token);
          if (config.successCallback) config.successCallback();
        }
        // dispatch
      },
      responseSubfield: 'user',
      ...config
    },
  );
}