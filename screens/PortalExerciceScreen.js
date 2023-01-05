import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import { Card } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Layout from '../components/Layout/Layout';
//import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'


const PortalExerciceScreen = () => {

  const navigation = useNavigation();

  const [background, setBackground] = useState({
    uri: 'https://www.pantalladeportiva.com/wp-content/uploads/2019/12/Gimnasio-mancuernas.jpg',

 
  })

  const [gallery, setgallery] = useState([

    {
      image: 'https://www.shutterstock.com/image-illustration/biceps-anatomy-muscles-isolated-on-600w-421145389.jpg',
      title: 'BICEPS',
      nav: 'ExerciceScreen',
   key: '1', 
    },

    {
      image: 'https://www.shutterstock.com/image-illustration/triceps-anatomy-muscles-isolated-on-600w-421169818.jpg',
      title: 'TRICEPS',
      nav: 'ExerciceScreen',
key: '2', 
    },


    {
      image: 'https://www.shutterstock.com/image-illustration/rectus-abdominis-anatomy-muscles-isolated-600w-421170031.jpg',
      title: 'ABDOMINALES',
      nav: 'ExerciceScreen',
      key: '3', 
    },
    {
      image: 'https://www.shutterstock.com/image-illustration/forearm-anatomy-muscles-isolated-on-600w-421145458.jpg',
      title: 'ANTEBRAZO',
      nav: 'ExerciceScreen',
      key: '4', 
    },
    {
      image: 'https://www.shutterstock.com/image-illustration/latissimus-dorsi-anatomy-muscles-isolated-600w-421145380.jpg',
      title: 'ESPALDA',
      nav: 'ExerciceScreen', key: '5',
    
    },
    {
      image: 'https://www.shutterstock.com/image-illustration/gluteus-maximus-anatomy-muscles-isolated-600w-421145407.jpg',
      title: 'GLUTEOS',
      nav: 'ExerciceScreen', key: '6',
     
    },
    {
      image: 'https://www.shutterstock.com/image-illustration/quadriceps-male-muscles-anatomy-muscle-600w-489727177.jpg',
      title: 'CUADRICEPS',
      nav: 'ExerciceScreen',  key: '7',
    
    },

    {
      image: 'https://www.shutterstock.com/image-illustration/hamstrings-anatomy-muscle-isolated-on-600w-421170010.jpg',
      title: 'FEMORAL',
      nav: 'ExerciceScreen',
      key: '8',
   
    },

    {
      image: 'https://www.shutterstock.com/image-illustration/chest-pectoralis-major-minor-anatomy-600w-421145401.jpg',
      title: 'PECHO',
      nav: 'ExerciceScreen',
      key: '9',
 
    },
  ]);


  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window')


  const renderItem = ({ item, index }) => {
    return (
      <View>

        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc
            })
            /*navegar */

            navigation.navigate(item.nav, {
              title: item.title,
     
              id: item.id,
            }
            )

          }
          }
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />


        </TouchableOpacity>
        <Card.Content style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 40
        }}>
          <Text style={styles.carouselText}>{item.title}</Text>
        </Card.Content>
      </View>

    )
  }


  return (
    <View style={{ flex: 1 }} blurRadius={100}>
      <Layout title={"Ejercicios"} nameIcon={"none"} nav={"none"} />
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={{ uri: background.uri }} style={styles.ImageBg} blurRadius={10}>


            <View style={styles.carouselContainerView}>
              <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              //pagingEnable={false}
              //minScrollDistance={20}
              />
            </View>


          </ImageBackground>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // CAROUSEL STYLES

  carouselImage: {

    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  SearchboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
  },
  carouselContainerView: {
    width: '100%',
    height: 580,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
  },
  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    borderWidth: 4,
    borderColor: 'rgba(2, 173, 148, 0.2)',
    marginBottom: 14
  }
});

export default PortalExerciceScreen;