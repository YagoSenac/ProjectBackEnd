import React from 'react';

import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';


export default function RegisterScreen({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
      <View style={styles.container}>
        <TextInput placeholder="Nome" placeholderTextColor="#fff" style={styles.input} />
        <TextInput placeholder="Email" placeholderTextColor="#fff" style={styles.input} />
        <TextInput placeholder="Senha" placeholderTextColor="#fff" secureTextEntry style={styles.input} />
        <TextInput placeholder="Confirmar Senha" placeholderTextColor="#fff" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Voltar para login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      margin: 20,
      padding: 20,
      borderRadius: 10,
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#fff',
      padding: 10,
      marginVertical: 8,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#0066cc',
      padding: 12,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    linkText: {
      color: '#ccc',
      textAlign: 'center',
      marginTop: 10,
    },
  });
  