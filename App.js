import React from 'react';
import { View } from 'react-native'
import { TextComponent } from './src/components/TextComponent'
// O componente View é melhor comparável a um div elemento HTML. Da mesma forma div, 
// o Viewcomponente não é visível a menos que um estilo seja aplicado.
//  Podemos aplicar esse estilo por meio do style props em camelCase.

export default function App() {
  return (
    <TextComponent />
  );
}
