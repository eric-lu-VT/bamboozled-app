import ActionTypes from '../../utils/store';

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  // console.log(`${action.type}_${action.status}`);
  // console.log(action.payload);
  switch (`${action.type}_${action.status}`) {
    case `${ActionTypes.SEND}_SUCCESS`: 
      console.log('hit reducer!');
      return state;
    default:
      return state;
  }
};

export default reducer;