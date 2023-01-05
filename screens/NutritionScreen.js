
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
//import FitnessCards from "../components/FitnessCards";
import NutritionCards from "../components/exercices/NutritionCards";
import Layout from "../components/Layout/Layout";

const NutritionScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <Layout title={"Nutricion"} nameIcon={"none"} nav={"none"} />
      <ScrollView style={{  backgroundColor: 'black' }}>
        <NutritionCards />
      </ScrollView>
    </View>
  );
};

export default NutritionScreen;