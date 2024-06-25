import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class VitalityFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("./apple1.png")} style={styles.logo} />
          <Text style={styles.headerText}>Vitality</Text>
        </View>
        <View style={styles.feedContent}>
          <Text style={styles.feedText}>
            Bem-vindo ao Vitality! Nosso objetivo é ajudá-lo a evitar o desperdício de alimentos.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#005400",
    paddingVertical: 20,
    paddingHorizontal: 10
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
  }
});
