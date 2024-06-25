import { Text, SafeAreaView, StyleSheet,Image} from 'react-native';

import Cabecalho from '../components/Cabecalho'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
         <Image source={require("./dica.png")} style={styles.dica} />
         <Text style={styles.text}>1- Planeje suas refeições: Faça uma lista antes de comprar;</Text>

          <Text style={styles.text}>2- Compre conscientemente: Evite comprar em excesso;</Text>

          <Text style={styles.text}>3- Use tudo: Aproveite todas as partes dos alimentos;</Text>

          <Text style={styles.text}>4- Armazene corretamente: Mantenha alimentos frescos por mais tempo;</Text>

          <Text style={styles.text}>5- Reutilize sobras: Transforme sobras em novos pratos;</Text>

          <Text style={styles.text}>6- Composte os restos: Faça compostagem em vez de jogar fora;</Text>

          <Text style={styles.text}>7- Aceite alimentos 'feios': Eles são bons para comer também;</Text>

          <Text style={styles.text}>8- Congele alimentos: Prolongue a vida útil de frutas, legumes e pães;</Text>

          <Text style={styles.text}>9- Aprenda técnicas de conservação: Use métodos como fermentação e desidratação;</Text>

     <Cabecalho/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginTop:0,
  },
  paragraph: {
    margin: 24, 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
  logo: {
    width: 50,
    height: 20,
    marginRight: 90,
    marginTop:890,
  },

  dica: {
    marginLeft: 50,
    marginTop:70,
  },
  text: {
    marginLeft:35,
    marginBottom:20,
    fontWeight: 'bold',
    color: '#005400',
    
  }
});
