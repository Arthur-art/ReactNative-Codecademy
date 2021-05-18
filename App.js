import React from 'react';
import { View, Image } from 'react-native';
const image = require('./assets/favicon.png')

export default function App() {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: 'https://picsum.photos/100/100' }} style={{ width: 100, height: 100 }} />
      <Image style={{ width: 100, height: 100, }} source={image} />
    </View>
  );
}
