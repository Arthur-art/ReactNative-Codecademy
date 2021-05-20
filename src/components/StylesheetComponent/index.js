import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Button } from 'react-native';

export const StylesheetComponent = ({ grey }) => {

    const [state, setState] = useState(0);



    return (

        <View style={styles.layout}>
            <ScrollView horizontal>
                <View style={[styles.card, grey && { backgroundColor: 'grey' }]}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Count {state}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Count {state}</Text>
                </View>
            </ScrollView>
            <Button title="Press me" onPress={() => setState(state + 1)} />
        </View>
    );
}



export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    card: {
        width: 300,
        height: 400,
        backgroundColor: 'white',
        margin: 16,
        padding: 10,
        borderRadius: 16,
        shadowColor: 'black',
        textAlign: 'center'
    },
});