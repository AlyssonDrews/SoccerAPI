import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import "react-native-gesture-handler";
import Home from "./src/pages/Home";
import Fases from "./src/pages/Fases";
import Jogos from "./src/pages/Jogos";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          styles={styles.container}
          name="Página Inicial"
          component={Home}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          styles={styles.container}
          name="Fases"
          component={Fases}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          styles={styles.container}
          name="Jogos"
          component={Jogos}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    textAlign: 'center'
  },
  list: {
    padding: 20
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    justifyConcent: 'center',
    alignItems: 'center',
    marginBottom: 20,

  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
    marginTop: 5,
    textAlign: 'center'
  },
  botao: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    justifyConcent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});
