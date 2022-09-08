import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Pressable, ScrollView, Image} from 'react-native';

function Menu(props) {
    return (
        <ScrollView>
            <SafeAreaView style={styles.SearchBarContainer}>
                {/* Search bar */}
                <TextInput placeholder=' ( Do not ) Search' style={styles.SearchBar}/>
                <Pressable style={styles.Search}>
                  {/* insert magnifying glass img here*/}
                  <Text style={styles.SearchText}>Search</Text>
                </Pressable>
            </SafeAreaView>
            <View style={styles.FeaturedContent}>
                {/* Different parts of the app and stuff */}
                <Text style={styles.FeaturedContentTitle}>Featured Content</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.FCcontainer}>
                        <Text style={styles.FCTitle}>Clash of Clans Goblin</Text>
                        <Image style={styles.FCImage} source={require('../assets/img/Goblin_info.png')}></Image>
                    </View>


                    <View>
                        <Text>Green Goblin (Batman)</Text>
                        <Image source={require('../assets/img/Green_Goblin.png')}></Image>
                    </View>


                    <View>
                        <Text>English Folk Tale Goblin</Text>
                        <Image source={require('../assets/img/English_Goblin.png')}></Image>
                    </View>
                </ScrollView>
            </View>
            <View>
                {/* Featured goblins and travis scott video */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    SearchBarContainer:{
        height: '20%',
        justifyContent: 'center',
        alignItems: "flex-end",
        padding: '2.5%',
        backgroundColor: '#FF6294',
        flexDirection: 'row'
    },
    SearchBar: {
        height: "50%",
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 2.5
    },
    Search: {
        height: '50%',
        width: '15%',
        backgroundColor: '#d2f9e4',
        marginLeft: 10,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 2.5,
    },
    SearchText:{
        color: '#888',
        fontWeight: "bold",
        alignSelf: "center"
    },
    FeaturedContent:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: 500,
        backgroundColor: "#d2f9e4",
        padding: '2.5%'
    },
    FeaturedContentTitle:{
        fontSize: 30,
        fontWeight: "bold",
        margin: '2.5%',
        left: "20%",
    },
    FCcontainer:{
        justifyContent:"center",
        alignContent: 'center',
        height: 360,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius:15
    },
    FCTitle:{
        alignSelf: 'center',
        fontSize:30,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    FCImage:{
        backgroundColor: '#fff',
        height: 300
    },

})

export default Menu;