import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const imageDng = require('../../../assets/dngtransportes-logo.jpg')

//Home com uma image e um button para navegar em pilha para o component ProfileScreen
const DngScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.layout}>
            <Image style={{ width: 400, height: 400 }} source={imageDng} />
            <View style={styles.layoutButton}>
                <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
                <Button color="black" title="Go to Info" onPress={() => navigation.navigate('Info')} />
            </View>
        </View>
    )
}

const InfoScreen = () => (
    <View style={styles.layout}>
        <Text>Aprendendo React-Native na codecademy</Text>
    </View>
)

const ProfileScreen = () => (
    <View style={styles.layout}>
        <Image style={{ width: 400, height: 400 }} source={{ uri: 'https://avatars.githubusercontent.com/u/54858003?v=4' }} />
    </View>
);


const Stack = createStackNavigator();

export const ProgrammaticNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={DngScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Info" component={InfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    layoutButton: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});