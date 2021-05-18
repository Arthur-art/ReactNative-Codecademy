import React from 'react'
import { View, Text } from 'react-native'

export function TextComponent() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 14 }}>
                Aprendendo React Native na
                 <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Codecademy</Text>
            </Text>
        </View>
    )
}