import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import GuideScreen from '../screens/GuideScreen';
import StartScreen from '../screens/StartScreen';
const Stack = createStackNavigator();

function MyStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Guide" component={GuideScreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
    

    </Stack.Navigator>
  );
}
const HNavigation =()=>{
    return (
        <NavigationContainer>
            <MyStackNavigation></MyStackNavigation>
        </NavigationContainer>
    )
};
export default HNavigation;
