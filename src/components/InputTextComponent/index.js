import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export const InputTextComponent = () => {
    const [name, setName] = useState('');

    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
            marginTop: 300
        }}>
            <Text style={{ marginVertical: 16 }}>
                {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
                style={{ padding: 20, backgroundColor: '#f5f5f5' }}
                onChangeText={text => setName(text)}
            />
        </View>
    );
};


