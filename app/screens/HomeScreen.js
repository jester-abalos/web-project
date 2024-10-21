import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1, marginBottom: 70}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>  
                    <Text style={[styles.header, { color: 'white', marginTop: 80, fontSize: 26, textAlign: 'left', padding: 50, fontFamily: 'Poppins-ExtraBold' }]}>
                        Welcome to our ScienceHub
                    </Text>
                    <Text style={[styles.header, { color: 'white', fontSize: 13, right: 271, top: 100, fontFamily: 'Poppins-ExtraBold' }]}>
                       What do you want to know?
                    </Text>
                </View>
                <View style={[styles.paragraphContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }]}>
                    <Text style={{ fontSize: 90, fontWeight: 'bold', color: '#4A0665', right: 50, fontFamily: 'Poppins-ExtraBold' }}>GENRE</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Biology')}>
                        <Image source={require('../assets/img/biology.png')} style={{ right: 40, width: 100, margin: 10, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chemistry')}>
                        <Image source={require('../assets/img/chemistry.png')} style={{ left: 40, width: 100, margin: 10, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.paragraphContainer1, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Physics')}>
                        <Image source={require('../assets/img/physics.png')} style={{ right: 40, width: 100, margin: 10, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Earthsci')}>
                        <Image source={require('../assets/img/earthsci.png')} style={{ left: 40, width: 100, margin: 10, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.paragraphContainer2, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Psychology')}>
                        <Image source={require('../assets/img/PSYCHOLOGY.png')} style={{ right: 40, width: 100, margin: 10, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Comsci')}>
                        <Image source={require('../assets/img/com sci.png')} style={{ left: 40, width: 100, margin: 10, marginBottom: 10, height: 200, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Text style={[styles.buttonText, { fontFamily: 'Poppins-ExtraBold' }]}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.buttonText, { fontFamily: 'Poppins-ExtraBold' }]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ba42ff',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#FAEDFF',
        paddingTop: 23,
       
    },
    button: {
        backgroundColor: '#33cccc',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 100,
    },
    buttonText: {
        textAlign: "center",
        fontFamily: 'Poppins-ExtraBold',
    },
    paragraphContainer: {
        padding: 20,
        backgroundColor: '#FAEDFF',
        borderTopLeftRadius: 20,
        fontFamily: 'Poppins-ExtraBold',
        borderTopRightRadius: 20,
        flex:2,
    },
    paragraphContainer1: {
        padding: 10,
        backgroundColor: '#FAEDFF',
        fontFamily: 'Poppins-ExtraBold',
    },
    paragraphContainer2: {
        backgroundColor: '#FAEDFF',
        fontFamily: 'Poppins-ExtraBold',
        padding: 10,
    },
});

export default HomeScreen;

