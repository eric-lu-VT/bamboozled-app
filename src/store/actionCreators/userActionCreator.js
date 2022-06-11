import ActionTypes from '../../utils/store';

export function initializeUser(deviceId, username) {
  return {
    type: ActionTypes.INITIALIZE_USER,
    deviceId,
    username
  };
}

export function changeUsername(username) {
  return {
    type: ActionTypes.CHANGE_USERNAME,
    username
  }  
}