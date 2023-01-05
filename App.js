import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FitnessContext } from "./Context";

//import HomeScreen from "./screens/HomeScreen";
//import StackNavigator from "./StackNavigator";
import StackNavigator from "./components/Router/StackNavigator";



export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  ) ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
