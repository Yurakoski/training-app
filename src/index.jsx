import React from 'react';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store'; //el que exportamos desde store/index

//Se envuelve el AppNavigator con el Provider, que es el provedor de datos del store
//La app puede acceder al store

const App = ()=> {
  return (
    <Provider store={store}>
      <AppNavigator /> 
    </Provider>
  );
}

export default App;