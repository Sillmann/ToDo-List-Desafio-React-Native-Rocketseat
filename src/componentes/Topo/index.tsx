import { estilos } from './style';
import { Image } from 'react-native';
import { View } from 'react-native';

export function Topo() {
  return(
    <View style={estilos.tela}>
      <Image
        source={require('../../imagens/rocket.png')}
      />
      <Image
        source={require('../../imagens/to.png')}
      />
      <Image
        source={require('../../imagens/do.png')}
      />
    </View>
  )
}