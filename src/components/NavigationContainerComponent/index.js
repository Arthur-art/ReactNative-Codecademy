import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Os navegadores de entrada react-navigation são criados por um método de fábrica.
// O navegador de pilha é criado pelo createStackNavigator. Este método retorna um objeto
// com a propriedade Navigatore Screen. Essas propriedades são componentes exclusivos que 
// você deve usar ao renderizar as telas.


const FeedScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Home</Text>
    </View>
)

const Profile = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Profile</Text>
    </View>
)

const Stack = createStackNavigator();

export const NavigationContainerComponent = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)


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