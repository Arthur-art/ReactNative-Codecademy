import React from 'react';
import { View } from 'react-native'

// O componente View é melhor comparável a um div elemento HTML. Da mesma forma div, 
// o Viewcomponente não é visível a menos que um estilo seja aplicado.
//  Podemos aplicar esse estilo por meio do style props em camelCase.

export default function App() {
  return (
    <View style={styleView}>

    </View>
  );
}

const styleView = {
  widht: 100,
  height: 100,
  backgroundColor: 'red'
};