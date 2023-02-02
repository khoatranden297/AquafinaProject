import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import HuongdanScreen from '../screens/HuongdanScreen';
import StartScreen from '../screens/StartScreen';
const Stack = createStackNavigator();

function MyStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Huongdan" component={HuongdanScreen} />
    

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
