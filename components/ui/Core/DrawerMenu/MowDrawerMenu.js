import React, { useContext } from "react";
import { View, TouchableOpacity, Text, ScrollView, Image, ImageBackground, StyleSheet } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { mowColors } from "../../../../values/Colors/MowColors";
import { statusBarHeight } from "../../../../values/Constants/MowConstants";
import { useNavigation } from "@react-navigation/native";



const MowDrawerMenu = () => {

    const navigation = useNavigation();
   

    const _handleLogout = () => {

        // dispatch({ type: types.authLogout })
    }

    const _renderMenuItem = (icon, text, navigateTo, logout = false) => {
        return (

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: hp("1.5%"),
                    marginVertical: hp("2%"),
                    marginLeft: wp("1%"),
                }}

                onPress={() => {
                    if (!logout) {
                     
                        navigation.navigate(navigateTo);
                    }
                    else {
                        _handleLogout();
                    }
                }}
            >
                <Entypo name={icon} size={24} color="white" />
                <Text
                    style={{
                        flex: 8,
                        fontSize: hp("2%"),
                        color: 'white',
                        marginLeft: 5,
                        fontWeight: "500",
                        fontStyle: "normal",
                        letterSpacing: 0,
              
                    }}>

                    {text}

                </Text>

            </TouchableOpacity>

        )
    }



    return (

        <View
            style={{ flex: 1, backgroundColor: mowColors.mainColor, borderTopRightRadius: 50, borderBottomRightRadius: 50 }}>

            {/* header view */}
            <ImageBackground source={{ uri: 'https://www.pantalladeportiva.com/wp-content/uploads/2019/12/Gimnasio-mancuernas.jpg' }} style={styles.ImageBg} blurRadius={10}>
                <View
                    style={{
                        marginTop: 10,
                        paddingTop: statusBarHeight,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>


                    {/* profile image view */}
                    <View
                        style={{
                            height: hp(10.5),
                            width: hp(10.5),
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: "white",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <Image
                            style={{ height: hp(15), width: hp(15), borderRadius: 50 }}
                            resizeMode={"contain"}
                            source={{ uri: 'https://i.pinimg.com/564x/60/5d/5a/605d5af27a6a48fbdc5c157be87aee21.jpg' }} />

                    </View>


                    {/* name text */}
                    <Text
                        style={{
                            marginTop: 20,
                            fontSize: hp(2),
                            fontWeight: "600",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "center",
                            color: "white"
                        }}>

                        Gym Trainer

                    </Text>

                </View>

                <ScrollView
                    style={{ marginTop: hp("1%"), marginBottom: hp("1%") }}>

                

                    {_renderMenuItem("home", "Home", "HomeScreen", false)}
               
                    {_renderMenuItem("creative-commons-attribution", "Ejercicios", "PortalExerciceScreen",false)}
                    {_renderMenuItem("calendar", "Rutinas", "RoutinesScreen", false)}
                    {_renderMenuItem("bucket", "Nutricion", "HomeScreen", false)}
                    
                    {_renderMenuItem("document-landscape", "Extras", "HomeScreen", false)}
                   
                   
                    {/* logout button */}
                    {_renderMenuItem("log-out", "Sing out", "", true)}



                </ScrollView>

            </ImageBackground>
          
        </View>
    );

}


const styles = StyleSheet.create({


    ImageBg: {
        flex: 1,
        height: null,
        width: null,
        opacity: 1,
        justifyContent: 'flex-start',
    },


});

export default MowDrawerMenu