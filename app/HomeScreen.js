import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient
import { router } from "expo-router";

export default HomeScreen = () => {
  return (
    <LinearGradient
      // Definindo as cores do gradiente
      colors={['#0A0C14', '#17243E', '#17243E']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../assets/03d.png')} // Caminho para o arquivo PNG
          style={styles.logo} // Estilo da imagem
        />
        <Text style={styles.temperatureText}>21ºC</Text>
        <Text style={styles.weatherText}>Clouds 21°C/24°C</Text>

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            router.push("/CategoryScreen");
          }}
        >
          <Text style={styles.buttonText}>Explore as Opções</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#313743", // Tom neutro e moderno para o header
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", // Fixando o header no topo
    top: 0,
    zIndex: 1,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff", // Tom claro para o texto, sem ser puro branco
    fontFamily: "Roboto",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100, // Ajusta para evitar sobreposição do header
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#F5F5F5", // Texto em branco suave
    marginBottom: 20,
    fontFamily: "Roboto",
  },
  logo: {
    width: 184, // Largura da imagem
    height: 184, // Altura da imagem
    resizeMode: 'contain', // Ajusta a imagem mantendo a proporção
    marginBottom: 10, // Espaçamento inferior
  },
  temperatureText: {
    fontFamily: "Montserrat", // Família de fontes Montserrat
    fontSize: 96, // Tamanho da fonte 96px
    fontWeight: "200", // Peso da fonte 200
    lineHeight: 117, // Altura da linha 117.02px
    textAlign: "center", // Alinhamento centralizado
    color: "#FFFFFF", // Cor branca no texto
    marginBottom: 20, // Espaçamento inferior para ajustar o layout
  },
  weatherText: {
    fontFamily: "Montserrat", // Família de fontes Montserrat
    fontSize: 12, // Tamanho da fonte 12px
    fontWeight: "500", // Peso da fonte 500
    lineHeight: 14.63, // Altura da linha 14.63px
    textAlign: "center", // Alinhamento centralizado
    color: "#FFFFFF", // Cor branca no texto
    marginBottom: 20, // Espaçamento inferior (se necessário)
  },
  touchableOpacity: {
    backgroundColor: "#4CAF50", // Verde suave e moderno para o botão
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
    borderRadius: 30, // Cantos bem arredondados para suavidade
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Leve elevação para profundidade
  },
  buttonText: {
    color: "#FFFFFF", // Branco no texto do botão
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto",
  },

});
