import React from 'react';
import { StyleSheet, View } from 'react-native';

export const StylesheetComponent = () => (
    <View style={styles.layout}>
        <View style={styles.card} />
        <View style={styles.card} />
    </View>
);

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        margin: 16,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 }
    },
});