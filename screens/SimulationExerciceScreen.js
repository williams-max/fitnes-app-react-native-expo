import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useContext } from "react";

import { WebView } from 'react-native-webview';
import { Appbar, Card, Divider, Paragraph } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

import { useRoute } from "@react-navigation/native";


const SimulationExerciceScreen = () => {

  const route = useRoute();

  const {  steps,name, animationUrl } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header  style={{backgroundColor:'white',height:300}}>
      <WebView
          style={{ width: '100%', height: 300, backgroundColor: 'black' }}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          source={{
            html: `<iframe width="100%" height="100%" src="${animationUrl}" frameborder="0"></iframe>`
          }}
        />   
      </Appbar.Header>
      <ScrollView style={{ marginTop: 25 }}>

        <Card.Content style={{ backgroundColor: '#BF0000' }}>
          <Card.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Paragraph style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Series</Paragraph>
            <Paragraph style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Rep</Paragraph>
            <Paragraph style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Peso</Paragraph>
          </Card.Content>
          <Card.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Paragraph style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Comentarios</Paragraph>
          </Card.Content>
        </Card.Content>
        <Card.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Paragraph style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Paragraph>
        </Card.Content>

        <Card.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <AntDesign name="linechart" size={34} color="#BF0000" />
          <AntDesign name="pluscircle" size={34} color="#BF0000" />
        </Card.Content>
        <Divider style={{ borderWidth: 2, borderColor: '#BF0000', marginTop: 10 }} />
        <Card.Content>

          { steps.map((item, key) => (

            <Paragraph key={key} style={{ fontSize: 16 }}>{item.description} {'\n'}</Paragraph>

          ))}
      
        </Card.Content>

      </ScrollView>
    </View>
  );
};

export default SimulationExerciceScreen;


