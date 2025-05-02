import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RegisterScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
    >
      <View>
        <Text style={styles.title}>Faça seu cadastro</Text>

        {/* Nome */}
        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Como gostaria de ser chamado?"
            placeholderTextColor="#000"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={styles.input}
          />
        </View>

        {/* Confirmar Email */}
        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Confirmar Email"
            placeholderTextColor="#000"
            style={styles.input}
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
          />
        </View>

        {/* Confirmar Senha */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#000" style={styles.icon} />
          <TextInput
            placeholder="Confirmar Senha"
            placeholderTextColor="#000"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Botão cadastrar */}
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Cadastrar</Text>
            <Icon name="arrow-forward" size={24} color="#000" />
          </View>
        </TouchableOpacity>

        {/* Voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
          <Icon name="arrow-back" size={20} color="#000" />
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#000',
    padding: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    marginRight: 8,
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#000',
    marginLeft: 5,
  },
});
