import React, { useState } from 'react'

//import FAIcon from 'react-native-vector-icons/FontAwesome';
//import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet, Text, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';

import { Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const Layout = (props) => {

  
    const { title,nameIcon } = props;
    const navigation = useNavigation();

    const openDrawer = () => {

        navigation.dispatch(DrawerActions.openDrawer())
        // navigation.navigate("Info");
    }

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <SafeAreaView>
            <Appbar.Header style={styles.header}>
                {/* user button */}
                {nameIcon != "none" ? <>
                <TouchableOpacity
                    onPress={openDrawer}
                    style={{ alignItems: "center", marginLeft: 5 }}>
                    <AntDesign name={nameIcon} size={24} color="white" />

                </TouchableOpacity>
                </>:<>
                <TouchableOpacity
                    onPress={openDrawer}
                    style={{ alignItems: "center", marginLeft: 5 }}>
                    <AntDesign name="bars" size={24} color="white" />

                </TouchableOpacity>
                </>}
                

                <Text style={{color:'transparent'}}>-------</Text>

               
                <Appbar.Content title={title} color='white' style={{ fontSize: 'bold' }} />

                <Appbar.Action icon="dots-vertical" color='white' />
            </Appbar.Header>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#BF0000',
        width: '100%'
    }
    , container: {
        padding: 0,
        margin: 0
    }
})

export default Layout