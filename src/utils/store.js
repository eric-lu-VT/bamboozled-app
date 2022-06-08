import AsyncStorage from '@react-native-async-storage/async-storage';

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
    console.log('get bearerTokenError:' + e);
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
    console.log('set bearerTokenError:' + e);
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
    console.log('remove bearerTokenError:' + e);
  }
}

export default ActionTypes;