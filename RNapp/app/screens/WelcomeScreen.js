// rsf
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/img/WSimg.jpg')} style={styles.background}>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>GOBLIN GUMS</Text>
                <Image source={require('../assets/img/logo.png')} style={styles.logo}></Image>
                <Text style={styles.slogan}>Rubbin' Foreheads!</Text>
            </View>
            <View style={styles.loginBtn}>
                <Text style={styles.accBtn}>Login</Text>
            </View>
            <View style={styles.signinBtn}>
                <Text style={styles.accBtn}>Sign Up</Text>
            </View>
        </ImageBackground>
    );
}
// rnss
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center'
    },
    loginBtn:{
        width: '100%',
        height: 70,
        backgroundColor: '#FF8CDE'
    },
    signinBtn:{
        width: '100%',
        height: 70,
        backgroundColor: '#FF6294'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: 'absolute',
        top: 80,
        alignItems: 'center',
        alignSelf: 'center'
    },
    title: {
        fontSize: 40,
        color: '#FF6294',
        fontWeight: 'bold'
    },
    slogan: {
        fontSize: 20,
        color: '#FF8CDE',
        fontWeight: '600'
    },
    accBtn:{
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        top: 20
    }
})

export default WelcomeScreen;