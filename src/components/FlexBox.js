import React from 'react'
import { View } from 'react-native'

export function FlexBox() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'red', width: 100, height: 100 }}></View>
            <View style={{ backgroundColor: 'blue', width: 100, height: 100 }}></View>
        </View>
    )
}