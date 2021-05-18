import React from 'react'
import { View, Text } from 'react-native'

export function TextComponent() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Hello World
            </Text>
        </View>
    )
}