import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigation/homeStack';
import { AppProvider } from "./AppContext";


function App() {
   
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );

}
export default () => {
  return(
    <AppProvider>
      <App/>
    </AppProvider>
   
  )
}

