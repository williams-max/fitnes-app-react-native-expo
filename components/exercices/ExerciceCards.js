import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { Card, Paragraph ,Divider} from 'react-native-paper';
import fitness from "../../data/Biceps";
import fitnessGlutes from "../../data/Glutes";
import fitnessTricpes from "../../data/Triceps";

import { useNavigation, useRoute } from "@react-navigation/native";

const ExerciceCards = () => {

  const route = useRoute();
  const [FitnessData, SetFitnessData] = useState([]);

  const title = route.params.title;


  useEffect(() => {
    if (title == "GLUTEOS") {
      //load data
    
      SetFitnessData(fitnessGlutes)

    } else {
      if (title == "BICEPS") {
        //load data
   
        SetFitnessData(fitness)
      }else{
        if (title == "TRICEPS") {
          //load data
       
       
          SetFitnessData(fitnessTricpes)
        } 
      }
    }
  }, [title]);


 

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', margin: 5 }} >

      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate(item.nav, {
            image: item.image,
            animationUrl: item.animationUrl,
            name:item.name,
            steps:item. steps,
            id: item.id,
          })}
          style={{
            display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start',
            margin: 5, backgroundColor: 'white', width: '98%', borderRadius: 5
          }}
          key={key}
        >
          <Image
            style={{
              width: "30%", height: 100, borderRadius: 5, marginLeft: 10,

            }}
            source={{ uri: item.image }}
          />

          <Card.Content
            style={{ display: 'flex', flexDirection: 'column' }}>
            <Paragraph
              style={{
                color: "red",
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: 'white'
              }}
            >
              {item.name}
            </Paragraph>
            <Divider style={{marginTop:12}}/>

            <Text
              style={{
                color: "red",
                fontSize: 12,
                backgroundColor: 'white',
                marginTop:20,
                paddingLeft:135,
                width:200
              }}
            >
              {item.description}
   
            </Text>
          </Card.Content>
        </Pressable>
      ))}
    </View>
  );
};

export default ExerciceCards;

