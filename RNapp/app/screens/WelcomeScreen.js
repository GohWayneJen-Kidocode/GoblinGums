// rsf
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Pressable } from 'react-native';

function WelcomeScreen({ navigation }) {

    const pressHandlerLogin = () => {
        navigation.navigate('Login');
    }
    const pressHandlerSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ImageBackground source={require('../assets/img/WSimg.jpg')} style={styles.background}>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>GOBLIN GUMS</Text>
                <Image source={require('../assets/img/logo.png')} style={styles.logo}></Image>
                <Text style={styles.slogan}>Rubbin' Foreheads!</Text>
            </View>
            <Pressable style={styles.loginBtn} onPress={pressHandlerLogin}>
                <Text style={styles.accBtn}>Login</Text>
            </Pressable>
            <Pressable style={styles.signinBtn} onPress={pressHandlerSignUp}>
                <Text style={styles.accBtn}>Sign Up</Text>
            </Pressable>
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
        justifyContent: 'center',
        backgroundColor: '#FF8CDE'
    },
    signinBtn:{
        width: '100%',
        height: 70,
        backgroundColor: '#FF6294',
        justifyContent: 'center'
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
    }
})

export default WelcomeScreen;