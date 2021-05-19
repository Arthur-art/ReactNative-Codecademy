import React from 'react';
import { View, Image, Text } from 'react-native';
const image = require('../../../assets/dngtransportes-logo.jpg')

export const ImageComponent = () => {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bdc3c7' }}>
            <Image style={{ width: 100, height: 100, }} source={image} />
            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/54858003?v=4' }}
                style={{ width: 100, height: 100, borderRadius: 20 }} />
        </View>
    )
}

