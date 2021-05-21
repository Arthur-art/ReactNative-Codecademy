import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FeedScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Feed</Text>
    </View>
);

const CatalogScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Catalog</Text>
    </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Catalog" component={CatalogScreen} />
    </Tab.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});