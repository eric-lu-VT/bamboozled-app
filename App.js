import { Provider } from 'react-redux';

import store from './src/store';
import AppNavigator from './src/navigation'
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}