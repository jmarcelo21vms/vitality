import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Importe createStackNavigator
import Cabecalho from '../components/Cabecalho'

// Defina as telas de detalhes e sustentáveis
function DetalhesScreen() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Cabecalho/>
      <Text style={styles.feedText}>1) Sopa de Vegetais: Use sobras de legumes e carne para fazer uma sopa nutritiva.
</Text>
    <Text style={styles.feedText}>2) Frittata de Sobras: Misture ovos com sobras de legumes, queijo e carne para fazer uma frittata.
</Text>
 <Text style={styles.feedText}>3) Smoothies de Frutas: Use frutas maduras demais para comer sozinhas para fazer smoothies.
</Text>
    </View>
    
  );
}

function SustentaveisScreen() {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Cabecalho/>
      <Text style={styles.feedText}>1) Croquetes de Arroz: Combine sobras de arroz com legumes e queijo para fazer croquetes.
  </Text>
    <Text style={styles.feedText}>2) Salada de Sobras: Misture sobras de carne, peixe ou frango com vegetais frescos para uma salada rápida.

  
  </Text>
  <Text style={styles.feedText}>3)
  Banana Bread: Use bananas maduras para fazer pão de banana.
  


</Text>

    </View>
    
  );
}

function ReceitasScreens() {
  const navigation = useNavigation();

  const handleDetalhesClick = () => {
    navigation.navigate('DetalhesScreen');
  };

  const handleSustentaveisClick = () => {
    navigation.navigate('SustentaveisScreen');
  };

  return (
    <View style={styles.container}>
  
    <Cabecalho/>
   <View style={styles.containerBotao}>
      <TouchableOpacity onPress={handleDetalhesClick} style={styles.botao}>
        <Image
          source={{ uri: 'https://www.mundoboaforma.com.br/wp-content/uploads/2018/04/sopa-de-vegetais.jpg' }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text style={styles.feedText}>Recicle e Reutilize alimentos saudáveis</Text>
      <TouchableOpacity onPress={handleSustentaveisClick} style={styles.botao}>
        <Image
          source={{ uri: 'https://www.paho.org/sites/default/files/alimentacao-saudavel-diversificada.jpg' }}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text style={styles.feedText}>Faça alimentos saudáveis</Text>
      </View>
    </View>
  );
}

// Crie um StackNavigator
const Stack = createStackNavigator();

// Defina as telas e as rotas do StackNavigator
function ReceitasStack() {
  return (
    <Stack.Navigator initialRouteName="Receitas">
      <Stack.Screen name="Receitas" component={ReceitasScreens }  options={{ headerShown: false } }/>
      <Stack.Screen name="DetalhesScreen" component={DetalhesScreen} options={{ headerShown: false } } />
      <Stack.Screen name="SustentaveisScreen" component={SustentaveisScreen}  options={{ headerShown: false } }/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  feedText: {
    fontSize: 16,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
containerBotao:{
   marginTop:20
 }
  
});

export default ReceitasStack; // Exporte o StackNavigator
