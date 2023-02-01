import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomePage';

const Stack = createStackNavigator();

function MyStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
     

    </Stack.Navigator>
  );
}
const HNavigation =()=>{
    return (
        <NavigationContainer>
            <MyStackNavigation/>
        </NavigationContainer>
    )
};
export default HNavigation;
