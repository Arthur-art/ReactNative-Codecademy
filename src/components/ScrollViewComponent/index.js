import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export const ScrollViewComponent = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
            Scroll me!
    </Text>
        <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
            {/* This is our scrollable area */}
            <ScrollView vertical>
                <View style={{ width: 300, height: 300, backgroundColor: 'black' }} />
                <View style={{ width: 300, height: 300, backgroundColor: 'grey' }} />
                <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
            </ScrollView>
        </View>
    </View>
);
