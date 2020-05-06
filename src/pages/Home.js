import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Home = (props) => {
  const { navigation } = props;
  const [campetonatos, setCampeonatos] = useState([]);

  const getCampeonato = () => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos", {
        headers: {
          Authorization: `Bearer live_20bcaf29f676353fb54a709a959c82`,
        },
      })
      .then((retorno) => {
        setCampeonatos(retorno.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getCampeonato();
  }, []);

  return (
    <View style={styles.container}>
      <Text style= {styles.text}> Selecione o Campeonato ou Copa </Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={campetonatos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.replace("Fases", { campeonatoId: item.campeonato_id })
            }
          >
            <View></View>
            <Text style={styles.item}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

export default Home;

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
