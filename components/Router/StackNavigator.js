import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from "../../screens/HomeScreen";
import PortalExerciceScreen from "../../screens/PortalExerciceScreen";
import RoutinesScreen from "../../screens/RoutinesScreen";
import ExerciceScreen from "../../screens/ExerciceScreen";
import SimulationExerciceScreen from "../../screens/SimulationExerciceScreen";
import NutritionScreen from "../../screens/NutritionScreen";

import MowDrawerMenu from "../ui/Core/DrawerMenu/MowDrawerMenu";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>

      <Drawer.Navigator

        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent',
          },
        }}

        drawerContent={(props) => <MowDrawerMenu {...props} />}
        initialRouteName="HomeScreen">
        <Drawer.Screen name={"HomeScreen"} component={HomeScreen} />
        <Drawer.Screen name="PortalExerciceScreen" component={PortalExerciceScreen} />
        <Drawer.Screen name="RoutinesScreen" component={RoutinesScreen} />
        <Drawer.Screen name="ExerciceScreen" component={ExerciceScreen} />
        <Drawer.Screen name="SimulationExerciceScreen" component={SimulationExerciceScreen} />
        <Drawer.Screen name="NutritionScreen" component={NutritionScreen} />


      </Drawer.Navigator>


    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
