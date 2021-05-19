import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const ButtonsComponent = () => {
    const [pressedCount, setPressedCount] = useState(1);

    const handleChange = () => {

        setPressedCount((prev) => prev = prev + 1)
    }

    return (
        <View>
            <View style={{ flex: 1, justifyContent: 'center', marginTop: 300, alignItems: 'center' }}>
                <Text style={{ marginBottom: 20 }}>
                    {pressedCount > 0
                        ? `The button was pressed ${pressedCount} times!`
                        : 'The button isn\'t pressed yet'
                    }
                </Text>
            </View>
            <Button
                title='Press me'
                onPress={() => handleChange()}
            />
        </View>
    );
};

export default ButtonsComponent;