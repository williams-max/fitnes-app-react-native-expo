
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
//import FitnessCards from "../components/FitnessCards";
import RoutinesCards from "../components/exercices/RoutinesCards";
import Layout from "../components/Layout/Layout";

const RoutinesScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <Layout title={"Rutinas"} nameIcon={"none"} nav={"none"} />
      <ScrollView style={{  backgroundColor: 'black' }}>
        <RoutinesCards />
      </ScrollView>
    </View>
  );
};

export default RoutinesScreen;