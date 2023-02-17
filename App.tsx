import React from 'react';
import {  View } from 'react-native';
import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import { store } from './React-Redux/Store/Store';

function App(): JSX.Element {
  return(
  <View style={{flex:1}}>
    <Provider store={store}>
    <Counter />
    </Provider>
  </View>
  );
}

export default App;
