import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import socketMiddleware from './middleware/socketMiddleware';

export default function configureStore(socketClient) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const middleware = [
    thunk,
    socketMiddleware(socketClient)
  ]
  
  const store = createStore(
    reducers, 
    composeEnhancers(
      applyMiddleware(
        ...middleware
      )
    )
  );

  return store;
}