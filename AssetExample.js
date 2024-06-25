import React from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tela inicial
function ReceitasScreens({ navigation }) {
  const handleImageClick = () => {
    navigation.navigate('Detalhes'); // Navega para a tela de detalhes quando a imagem é clicada
  };
  const Sustentaveis = () => {
    navigation.navigate('Sustentaveis'); // Navega para a tela de detalhes quando a imagem é clicada
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImageClick}>
        <Image
          source={{ uri: 'https://www.mundoboaforma.com.br/wp-content/uploads/2018/04/sopa-de-vegetais.jpg' }} // URL da imagem
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text style={styles.feedText}>Recicle e Reutilize alimentos saudaveis </Text>
      <TouchableOpacity onPress={Sustentaveis}>
        <Image
          source={{ uri: 'https://www.paho.org/sites/default/files/alimentacao-saudavel-diversificada.jpg' }} // URL da imagem
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text style={styles.feedText}>faça alimentos saudaveis</Text>
       
    </View>
  );
}

// Tela de detalhes
function DetalhesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
     alignItems: 'center' 
  },
  header: { //cabeçalho
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#005400",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  logo: {//apple1
    width: 50,
    height: 50,
    marginRight: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  feedContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  feedText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18
  },
  bottomBar: {//rodape
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#005400",
    paddingVertical: 10
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#005400",
    fontSize: 16,
  },
});

