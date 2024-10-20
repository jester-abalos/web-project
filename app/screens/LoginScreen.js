import React, { useState } from 'react';
import { ImageBackground, View, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';

function LoginScreen({ navigation }) {
    const [loaded] = useFonts({
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleLogin = () => {
        if (username === 'Admin' && password === 'Admin') {
            setIsValid(true);
            navigation.navigate('Home');
        } else {
            setIsValid(false);
            Alert.alert('Invalid Credentials');
        }
    };

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground style={styles.container} source={require('../assets/bg.png')}>
            <Text style={{fontSize: 16, color: 'white', fontFamily: 'Poppins-ExtraBold', marginTop:180}}>Hi There!</Text>
            <Text style={{fontSize: 41, marginBottom:57,  color: 'white', fontFamily: 'Poppins-ExtraBold'}}>Let's Get Started</Text>
        
            <View style={[styles.inputContainer, {marginBottom: 10, marginTop:50 }]}>
                <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
            </View>
            <View style={[styles.inputContainer, {marginBottom: 10}]}>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
            </View>

            <View style={[styles.buttonContainer, {marginTop: 100}]}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 300,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        fontFamily: 'Poppins-ExtraBold',
    },
    button: {
        backgroundColor: '#B200FF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 60,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonText: {
        textAlign: "center",
        fontFamily: 'Poppins-ExtraBold',
    }
});

export default LoginScreen;

