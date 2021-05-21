import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const imageDng = require('../../../assets/dngtransportes-logo.jpg')

const FeedScreen = () => (
    <View style={styles.feedScreen}>
        <Text>Feed</Text>
    </View>
)

const Profile = () => (
    <View style={styles.feedScreen}>
        <Image style={{ width: 100, height: 100, borderRadius: 10 }} source={{ uri: 'https://avatars.githubusercontent.com/u/54858003?v=4' }} />
    </View>
)

const DNG = () => (
    <View style={styles.feedScreen}>
        <Image style={{ width: 100, height: 100, borderRadius: 10 }} source={imageDng} />
    </View>
)

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Dng" component={DNG} />
        </Tab.Navigator>
    </NavigationContainer>
)

export const styles = StyleSheet.create({
    feedScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})