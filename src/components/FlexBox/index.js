import React from 'react'
import { View } from 'react-native'
// O componente View é melhor comparável a um div elemento HTML. Da mesma forma div, 
// o Viewcomponente não é visível a menos que um estilo seja aplicado.
//  Podemos aplicar esse estilo por meio do style props em camelCase.


export function FlexBox() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'red', width: 100, height: 100 }}></View>
            <View style={{ backgroundColor: 'blue', width: 100, height: 100 }}></View>
        </View>
    )
}