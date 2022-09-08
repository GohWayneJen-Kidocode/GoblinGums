import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Pressable} from 'react-native';

const bingus = "Login"
const monke = "sign up"

function Login({navigation}) {
  
    const pressHandlerSignUp = () => {
        navigation.navigate('SignUp');
    }
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={styles.titleContainer}>
                <Text style={styles.titleText}>{bingus}</Text>
                <View>
                {/* back btn */}
                </View>
            </SafeAreaView>
            <View style={styles.inputContainer}>
                <View style={styles.emailContainer}>
                    <Text style={styles.emailTitle}>Email</Text>
                    <TextInput style={styles.emailInput} autoComplete='email' disableFullscreenUI={true} placeholder='Enter your email.'/>
                </View>
                <View style={styles.emailContainer}>
                    <Text style={styles.emailTitle} >Password</Text>
                    <TextInput style={styles.emailInput} secureTextEntry={true} disableFullscreenUI={true} placeholder='Enter your password.'/>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.loginBtn}>
                    <Text style={styles.loginText}>{bingus}</Text>
                </View>
                <Pressable onPress={pressHandlerSignUp}>
                  <Text style={styles.redirect}>Dont have an account? Click here to {monke}.</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Login;
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#eeeeee',
        flex: 1,
        justifyContent: 'flex-start'
    },
    titleContainer:{
        alignSelf: 'center',
        top: 60,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 10
    },
    titleText:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        color: '#FF6294'
    },
    inputContainer:{
        top: 70,
        margin: 20,
        padding: 10,
        height: '55%',
        backgroundColor: '#cccccc',
        borderRadius: 10
    },
    emailContainer: {
        margin: 5,
        padding: 5,
        marginTop: 15,
        borderRadius: 5,
        height: 80,
        backgroundColor: '#fff'
    },
    emailTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FF6294',
    },
    emailInput: {
        height: 30,
    },
    footerContainer:{
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30
    },
    loginBtn:{
        backgroundColor: '#FF6294',
        height: 50,
        width: 150,
        alignSelf: 'center',
        borderRadius: 7,
        bottom: 30,
        justifyContent: 'center'
    },
    loginText:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff'
    },
    redirect: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#000'
    },
})