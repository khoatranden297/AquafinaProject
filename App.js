import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import HNavigation from "./navigation/HNavigation";


export default function App() {
  return (
    <HNavigation></HNavigation>
  );
}

