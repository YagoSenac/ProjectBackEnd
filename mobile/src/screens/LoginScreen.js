import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.TextLogin}>Faça seu login</Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={styles.input}
            textAlign="center"
          />
        </View>

        {/* Senha */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#000"
            secureTextEntry
            style={styles.input}
            textAlign="center"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={() => setSelection(!isSelected)}
            color="#0066cc"
          />
          <Text style={styles.checkboxLabel}>Salvar todos os seus dados?</Text>
        </View>

        {/* Texto extra */}
        <Text style={styles.connectText}>Ou conecte-se usando</Text>

        {/* Social Icons */}
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="google" size={30} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="instagram" size={30} color="#C13584" />
          </TouchableOpacity>
        </View>

        {/* Criar conta simulada como input */}
        <TouchableOpacity style={styles.createAccountInput} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createAccountText}>Criar conta</Text>
          <Icon name="arrow-forward" size={24} color="#000" />
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    padding: 10,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
  TextLogin: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    color: '#000',
    fontSize: 16,
  },
  connectText: {
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 20,
  },
  createAccountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '80%',
    justifyContent: 'space-between',
  },
  createAccountText: {
    color: '#000',
    fontSize: 16,
  },
});
