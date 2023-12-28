import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

import HomePage from './src/Components/HomePage';
import Explore from './src/Components/Explore';
import DestinationDetails from './src/Components/DestinationDetails';
import Booking from './src/Components/Booking';
import RegistrationScreen from './src/Components/RegistrationScreen';
import LoginScreen from './src/Components/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  const deviceName = Constants.deviceName;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the color of the back navigation sign and header title text
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, deviceName }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false, deviceName }}/>
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="DestinationDetails" component={DestinationDetails} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerTitle: 'Create an Account',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
