import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native"; // Importe o NavigationContainer aqui

export default class App extends Component {
  render() {
    return (
      <NavigationContainer> 
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
}
