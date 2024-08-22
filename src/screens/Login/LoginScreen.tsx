import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!authContext) {
    return null;
  }

  const { login } = authContext;

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    login();
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;