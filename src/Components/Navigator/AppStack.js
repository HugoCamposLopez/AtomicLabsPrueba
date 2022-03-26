import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainScreen, WantToKnowYou, FinalPage } from '../../Screens/index'
const Stack = createNativeStackNavigator()
export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="WantToKnowYou" component={WantToKnowYou} />
      <Stack.Screen name="FinalPage" component={FinalPage} />
    </Stack.Navigator>
  )
}
