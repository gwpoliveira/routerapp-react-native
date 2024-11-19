import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default CategoryScreen = () => {
  const destinations = ['Teresina', 'Timon', 'Parnaiba', 'Campo Maior'];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cidades</Text>
      </View>

      <Text style={styles.title}>Escolha seu Destino!</Text>

      {destinations.map((destination, index) => (
        <TouchableOpacity
          key={index}
          style={styles.touchableOpacity}
          onPress={() => { router.push("/HomeScreen") }}
        >
          <Text style={styles.buttonText}>{destination}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E24", // Fundo escuro moderno
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20, // Espaço nas laterais para alinhar o conteúdo
  },
  header: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#3A3D46", // Header neutro e elegante
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: "absolute", // Fixando o header no topo
    top: 0,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E0E0E0", // Cor clara sem ser puro branco
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#F5F5F5", // Texto claro para contrastar com o fundo escuro
    marginBottom: 30,
    marginTop: 80, // Espaço para evitar sobreposição com o header
    fontFamily: "Roboto",
    textAlign: "center",
  },
  touchableOpacity: {
    backgroundColor: "#4CAF50", // Verde moderno e suave
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 25, // Botões arredondados
    marginTop: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Leve elevação para profundidade
  },
  buttonText: {
    color: "#FFFFFF", // Branco para bom contraste
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto",
  },
});
