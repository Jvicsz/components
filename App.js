import {Text, View} from  'react-native';
import Cabecalho from'./src/components/Cabecalho';
import Corpo from'./src/components/Corpo';
import Rodape from'./src/components/Rodape';
import { styles } from './src/styles/StylesSheet';

export default function App() {

return(

<View style={styles.container}>
  <Cabecalho />
  <Corpo />
  <Rodape />
</View>


);
}