import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';
import GuideScreen from '../screens/guideScreen';
const Stack = createStackNavigator();

function MyStackNavigation() {
  return (
    <Stack.Navigator>
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
