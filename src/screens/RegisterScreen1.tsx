import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';

type RootStackParamList = {
  Register2: undefined;
};

const RegisterScreen1 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Feather name="user" size={100} color="black" style={styles.icon} />

      <Text style={styles.title}>Registrarse</Text>

      <TextInput label="Nombre" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Apellido paterno" value={lastName} onChangeText={setLastName} style={styles.input} />
      <TextInput label="Apellido materno" value={surname} onChangeText={setSurname} style={styles.input} />
      <TextInput label="Número Teléfono" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />

      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Register2')}>
        Siguiente →
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
  button: {
    width: '100%',
    marginTop: 10,
  },
});

export default RegisterScreen1;