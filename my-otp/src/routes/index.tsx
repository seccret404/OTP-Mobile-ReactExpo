import React from 'react'
import { NavigationContainer } from '@react-navigation/native'  
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import HomePage from '../pages/home/home';
import BoardingPage from '../pages/boarding/boarding';


const Stack = createNativeStackNavigator();

export default function AppRouter() {
     return (
          <NavigationContainer>
               <Stack.Navigator initialRouteName='Boarding'>
                    <Stack.Screen name='Boarding' component={BoardingPage} options={{headerShown:false}} />
                    <Stack.Screen name='Home' component={HomePage} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}
