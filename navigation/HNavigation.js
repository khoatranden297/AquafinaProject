import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';
import HomePage from '../screens/HomePage';
import HuongdanScreen from '../screens/HuongdanScreen';
import StartScreen from '../screens/StartScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Load1Screen from '../screens/Loading1Screen';
import QuetmaScreen from '../screens/QuetmaScreen';
import ThankyouScreen from '../screens/ThankyouScreen';
import Popup from '../screens/Hetthoigian';
import Hetthoigian from '../screens/Hetthoigian';
const Stack = createStackNavigator();

function MyStackNavigation() {
  return (

    <Stack.Navigator>
        
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Huongdan" component={HuongdanScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />     
         
       <Stack.Screen name="Loading1" component={Load1Screen} />
      <Stack.Screen name="Quetma" component={QuetmaScreen} />
      <Stack.Screen name="Thankyou" component={ThankyouScreen} />
      <Stack.Screen name="Popup" component={Hetthoigian} />
       <Stack.Screen name="Start" component={StartScreen} />



    </Stack.Navigator>

  );
}
const HNavigation = () => {
  return (
    <NavigationContainer>
      <MyStackNavigation></MyStackNavigation>
    </NavigationContainer>
  )
};
export default HNavigation;
