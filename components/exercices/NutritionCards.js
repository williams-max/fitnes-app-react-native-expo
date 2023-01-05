import React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { Card, Paragraph } from 'react-native-paper';
import fitness from "../../data/nutrition";
import { useNavigation } from "@react-navigation/native";
import {btnNutritionStyle,imgNutrition,textTitle,textDescription} from "../../values/Styles/CardStyles";

const NutritionCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'black', display: 'flex', margin: 5 }} >

      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate(item.nav, {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={btnNutritionStyle}
          key={key}
        >
          <Image
            style={imgNutrition}
            source={{ uri: item.image }}
          />
          <Card.Content  
           style={{display:'flex',flexDirection:'column'}}>
            <Paragraph
              style={textTitle}
            >
              {item.name}
            </Paragraph>
            <Text
              style={textDescription}
            >
              {item.description}
            </Text>
          </Card.Content>


        </Pressable>
      ))}
    </View>
  );
};

export default NutritionCards;

