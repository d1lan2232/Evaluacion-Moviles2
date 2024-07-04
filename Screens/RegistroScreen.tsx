import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { ref, set } from 'firebase/database';
import { db } from '../Config/Config';

const RegistroScreen = ({ navigation }: any) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');

  const guardarUsuario = () => {
    set(ref(db, 'users/' + id), {
      id: id,
      name: nombre,
      race: raza,
      age: edad
    }).then(() => {
      Alert.alert("Mensaje", "Se ha guardado!");
      navigation.navigate('Edi-Eli', { // Asegúrate de usar 'EditarEliminar' como se define en la navegación
        id: id,
        name: nombre,
        race: raza,
        age: edad
      });
      setId('');
      setNombre('');
      setRaza('');
      setEdad('');
    }).catch((error) => {
      console.error('Error al guardar el usuario: ', error);
      Alert.alert('Error', 'Hubo un problema al guardar el usuario.');
    });
  };

  return (
    <ImageBackground style={styles.imagen}
      source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/8/427/desktop-wallpaper-best-3-vet-backgrounds-on-hip-veterinarian.jpg' }}>
      <View style={styles.container}>
        <Text style={styles.texto}>Mascotas</Text>
        <TextInput
          style={styles.input}
          placeholder='Ingrese el id'
          onChangeText={(texto) => setId(texto)}
          value={id}
          keyboardType='numeric' />
        <TextInput
          style={styles.input}
          placeholder='Ingrese nombre'
          onChangeText={(texto) => setNombre(texto)}
          value={nombre} />
        <TextInput
          style={styles.input}
          placeholder='Ingrese raza'
          onChangeText={(texto) => setRaza(texto)}
          value={raza} />
        <TextInput
          style={styles.input}
          placeholder='Ingrese edad'
          onChangeText={(texto) => setEdad(texto)}
          value={edad} />
        <Button title='Guardar info' onPress={() => guardarUsuario()} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  texto: {
    fontSize: 35,
    margin: 15,
    color: 'black',
    fontWeight: '900'
  },
  input: {
    width: '80%',
    height: 45,
    margin: 15,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 25,
    borderColor: '#8089ab',
    borderWidth: 3,
    borderBottomColor: '#0e7177',
    fontSize: 20
  }
});

export default RegistroScreen;
