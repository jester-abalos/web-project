import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function AboutScreen() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/about.png')} style={styles.image} />
            <ScrollView style={[styles.scrollView, { marginTop: -40 }]}>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.header}>
                        ABOUT US
                    </Text>
                    <Text style={styles.paragraph}>
                        Welcome to our ScienceHub, website a collaborative effort by the passionate students of Group 2 from Colegio De Montalban. In compliance with the ITAPPSDEV project, we have created this platform to ignite curiosity and foster a deeper understanding of the vast world of science.
                    </Text>
                    <Text style={styles.paragraph}>
                        The theme of this project is based on a user persona targeting students researching various branches of science. The colors, icons, and pictures are chosen for their aesthetic appeal, aiming to engage users and encourage exploration. The design is inspired by the vast, unknown galaxy, making the mobile application an interactive and engaging platform for learning science.
                    </Text>
                </View>
                
                <View style={styles.paragraphContainer1}>
                <Image source={require('../assets/abalos.png')} style={styles.image2} />
                    <Text style={styles.paragraph}>
                    UI Design Principles
UX Design Theory
Specialty: Leadership, Expertise, and Professional Coding Skills.                    </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    Abalos's adherence to UI Design Principles ensures consistency by maintaining uniform elements across the interface reducing the user's learning curve. Simplicity is also prioritized, creating a clear and design free 
of unnecessary clutter.                    </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    In UX Design Theory, Abalos emphasizes a User-Centered Design by placing the user at the heart of the design process. Furthermore, iterative usability testing with real users is conducted to continually refine and improve the product.                  </Text>
                </View>
                   
                <View style={styles.paragraphContainer1}>
                <Image source={require('../assets/mago.png')} style={styles.image3} />
                    <Text style={styles.paragraph}>
                    UI Design Principles
UX Design Theory
Specialty: Leadership, Expertise, and Professional Coding Skills.                    </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    Abalos's adherence to UI Design Principles ensures consistency by maintaining uniform elements across the interface reducing the user's learning curve. Simplicity is also prioritized, creating a clear and design free 
of unnecessary clutter.                    </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    In UX Design Theory, Abalos emphasizes a User-Centered Design by placing the user at the heart of the design process. Furthermore, iterative usability testing with real users is conducted to continually refine and improve the product.                  </Text>
                </View>
            </ScrollView>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 44,
        fontFamily: 'Poppins-ExtraBold',
        color: '#4A0665',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        flex: 1,
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
        backgroundColor: 'white',
        paddingTop: 9,
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
    },
    image: {
        width: '100%',
        height: 280,
        resizeMode: 'cover',
    },
    image2: {
        marginTop: 90,
        resizeMode: 'cover',    
        marginLeft: 1,
    },
    image3: {
         
        resizeMode: 'cover' ,    
        marginLeft: -20,
        width: 400,
        height: 500
    },
    paragraphContainer: {
        flex: 1,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FAEDFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    paragraphContainer1: {
        padding: 20,
        backgroundColor: '#FAEDFF',
       
    },
    paragraph: {
        fontSize: 18,
        color: '#4A4A4A',
        fontFamily: 'Poppins-Regular',
        padding: 20,
        
    },
    scrollView: {
       
    },
});

export default AboutScreen;

