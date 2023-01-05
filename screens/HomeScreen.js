import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import Layout from "../components/Layout/Layout";



const HomeScreen = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <Layout title={"Home"} nameIcon={"none"} nav={"none"}/>
      <ScrollView style={{ backgroundColor: 'black' }}>

        <FitnessCards />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
