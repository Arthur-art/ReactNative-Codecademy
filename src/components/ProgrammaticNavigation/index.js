import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FeedScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Feed</Text>
            <Button
                title="Go to catalog"
                onPress={() => navigation.navigate('Catalog')}
            />
        </View>
    );
};

const CatalogScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Catalog</Text>
    </View>
);

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
    </Stack.Navigator>
);

export const ProgramaticNavigation = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);



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