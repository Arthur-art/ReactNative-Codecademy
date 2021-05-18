import React from 'react';
import { View } from 'react-native'
import { FlexBox } from './src/components/FlexBox'
// O componente View é melhor comparável a um div elemento HTML. Da mesma forma div, 
// o Viewcomponente não é visível a menos que um estilo seja aplicado.
//  Podemos aplicar esse estilo por meio do style props em camelCase.

export default function App() {
  return (
    <FlexBox />
  );
}
