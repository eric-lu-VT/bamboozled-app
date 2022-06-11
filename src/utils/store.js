import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

import { authTokenName } from './constants';

/**
 * All necessary action types for updating redux state with CRUD actions
 *
 * * Create: FETCH_TYPE
 * * Read: FETCH_TYPE or FETCH_TYPES
 * * Update: FETCH_TYPE
 * * Delete: DELETE_TYPE
 */
const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  RESOURCE_SEARCH: 'RESOURCE_SEARCH',

  FETCH_RESOURCE: 'FETCH_RESOURCE',
  FETCH_RESOURCES: 'FETCH_RESOURCES',
  DELETE_RESOURCE: 'DELETE_RESOURCE',

  FETCH_USER: 'FETCH_USER',
  FETCH_USERS: 'FETCH_USERS',
  DELETE_USER: 'DELETE_USER',

  SOCKET_CONNECT: 'CONNECT',
  SOCKET_CONNECT_SUCCESS: 'CONNECT_SUCCESS',
  SOCKET_CONNECT_FAIL: 'CONNECT_FAIL',

  SOCKET_DISCONNECT: 'DISCONNECT',
  SOCKET_DISCONNECT_SUCCESS: 'DISCONNECT_SUCCESS',
  SOCKET_DISCONNECT_FAIL: 'DISCONNECT_FAIL',

  INITIALIZE_USER: "INITIALIZE_USER",
  CHANGE_USERNAME: 'CHANGE_USERNAME',

  START_GAME_SEND: 'START_GAME_SEND',
  START_GAME_SEND_SUCCESS: 'START_GAME_SEND_SUCCESS',
  START_GAME_SEND_FAIL: 'START_GAME_SEND_FAIL',
  START_GAME_RECEIVE: 'START_GAME_RECEIVE',
  START_GAME_RECEIVE_SUCCESS: 'START_GAME_RECEIVE_SUCCESS',
  START_GAME_RECEIVE_FAIL: 'START_GAME_RECEIVE_FAIL'
};

/**
 * All states an ongoing request can be in
 *
 * * Request: Request has been sent but no response has been received
 * * Success: Request has come back with a 2xx or 3xx status code
 * * Failure: Request has timed out or come back with a 4xx or 5xx status code
 * ? Clear Error: Internal usage type for clearing stored errors from actions in requestReducer
 */
export const requestStates = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  CLEAR_ERR: 'CLEAR_ERR',
};

/**
 * Gets the site-stored authToken from AsyncStorage and returns it in the form of an authorization header
 */
export async function getBearerTokenHeader() {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return ({ Authorization: `Bearer ${token}` });
  }
  catch(e) {
    console.error('get bearerTokenError:' + e);
  }
}

/**
 * Sets a returned token in AsyncStorage for attachment to later network requests
 * @param {*} token - A valid JWT authentication token
 */
export async function setBearerToken(token) {
  try  {
    await AsyncStorage.setItem(authTokenName, token);
  }
  catch(e) {
    console.error('set bearerTokenError:' + e);
  }
}

/**
 * Removes site-stored authToken from AsyncStorage.
 */
export async function removeBearerToken() {
  try {
    await AsyncStorage.removeItem(authTokenName);
  }
  catch(e) {
    console.error('remove bearerTokenError:' + e);
  }
}

export async function getDeviceId() {
  try {
    let uuid = uuidv4();
    let fetchUUID = await SecureStore.getItemAsync('secure_deviceid');
    //if user has already signed up prior
    if (fetchUUID) {
      uuid = fetchUUID
    }
    await SecureStore.setItemAsync('secure_deviceid', uuid);
    
    return uuid;
  }
  catch(e) {
    console.error('getDeviceId:' + e);
  }
}

export async function getUsername() {
  try {
    let fetchUsername = await SecureStore.getItemAsync('secure_username');
    //if username set prior
    if (fetchUsername) {
      return fetchUsername;
    }
    else {
      return 'noName';
    }
  }
  catch(e) {
    console.error('getUsername:' + e);
  }
}

export async function setUsername(newName) {
  try {
    await SecureStore.setItemAsync('secure_username', newName);
  }
  catch(e) {
    console.error('setUsername:' + e);
  }
}

export default ActionTypes;