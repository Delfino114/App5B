import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';

const RegisterScreen2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Feather name="user" size={100} color="black" style={styles.icon} />

      <Text style={styles.title}>Registrarse</Text>

      <TextInput label="Correo electrónico" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none" />
      
      <TextInput label="Contraseña" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      
      <Text style={styles.requisitos}>Requisitos:</Text>
      <Text style={styles.requirements}>• Al menos 8 caracteres</Text>
      <Text style={styles.requirements}>• Una letra mayúscula</Text>
      <Text style={styles.requirements}>• Un número</Text>
      <Text style={styles.requirements}>• Un carácter especial</Text>

      <TextInput label="Confirmar contraseña" value={confirmPassword} onChangeText={setConfirmPassword} style={styles.input} secureTextEntry />

      <Button mode="contained" style={styles.button}>
        Registrarse
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  requisitos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  requirements: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

export default RegisterScreen2;