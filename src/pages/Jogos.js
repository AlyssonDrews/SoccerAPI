import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "axios";

const Fases = (props) => {
  const { navigation } = props;
  const { route } = props;
  const { campeonatoId, faseId } = route.params;

  const [jogos, setJogos] = useState([]);
  const [mensagem, setMensagem] = useState([]);

  const getCampeonatos = () => {
    axios
      .get(
        `https://api.api-futebol.com.br/v1/campeonatos/${campeonatoId}/fases/${faseId}`,
        {
          headers: {
            Authorization: `Bearer live_20bcaf29f676353fb54a709a959c82`,
          },
        }
      )
      .then((retorno) => {
        const chaves = retorno.data.chaves;
        const arrayChaves = [];

        for (var chave in chaves) {
          arrayChaves.push(chaves[chave]);
        }
        setJogos(arrayChaves);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getCampeonatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text> {mensagem} </Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={jogos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item)}>
            <Text style={styles.item}>{item.ida[0].placar}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.email}
      />
      <Button style={styles.botao}
        title= "Voltar para Fases"
        onPress={(item) => navigation.replace("Fases", { campeonatoId: item.campeonato_id })}
      >
      </Button>
      <Button style={styles.botao}
        title="Voltar a página inicial"
        onPress={() => navigation.replace("Página Inicial")}
      />
    </View>
  );
};

export default Fases;

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
