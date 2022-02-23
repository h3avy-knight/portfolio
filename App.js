import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Portfolio from './src/screens/Portfolio';
import UserData from './src/screens/UserData';
import {View} from 'react-native';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View>
      {/* <NavigationContainer> */}
      <Portfolio />
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="course" component={Course} />
        <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Portfolio" component={Portfolio} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
};

export default App;
