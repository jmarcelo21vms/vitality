import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Cabecalho extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require("../screens/apple1.png")} style={styles.logo} />
        <Text style={styles.headerText}>Vitality</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#005400",
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    zIndex: 999 ,// Para garantir que o cabeçalho esteja acima de outros elementos

  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});

export default Cabecalho;
