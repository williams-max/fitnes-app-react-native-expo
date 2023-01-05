
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
//import FitnessCards from "../components/FitnessCards";
//import ExerciceCards from "../components/exercices/ExerciceCards";
import ExerciceCards from "../components/exercices/ExerciceCards";
import Layout from "../components/Layout/Layout";

import { useRoute } from "@react-navigation/native";
const ExerciceScreen = () => {

    const route = useRoute();

    const { title } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            <Layout title={title} nameIcon={"arrowleft"} nav={"none"} />
            <ScrollView>
                <ExerciceCards />
            </ScrollView>

        </View>
    );
};

export default ExerciceScreen;