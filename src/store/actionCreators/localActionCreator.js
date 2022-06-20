import ActionTypes from '../../utils/store';

export function initializeUser(deviceId, username) {
  return {
    type: ActionTypes.INITIALIZE_USER,
    deviceId,
    username,
  };
}

export function changeUsername(username) {
  return {
    type: ActionTypes.CHANGE_USERNAME,
    username,
  }  
}

export function changeCurCardSelected(card) {
  return {
    type: ActionTypes.CHANGE_CUR_CARD_SELECTED,
    card,
  }
}