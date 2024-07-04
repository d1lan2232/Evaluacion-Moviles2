import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native';
import { ref, remove, update, onValue } from 'firebase/database';
import { db } from '../Config/Config';

const EditarEliminarScreen = ({ route, navigation }: any) => {
  const { id } = route.params || {};
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (id) {
      const userRef = ref(db, `users/${id}`);
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          setName(userData.name || '');
          setRace(userData.race || '');
          setAge(userData.age || '');
        } else {
          Alert.alert('Error', 'No se encontraron datos para el ID especificado.');
          navigation.goBack();
        }
      });
    }
  }, [id]);

  const handleEditar = () => {
    update(ref(db, 'users/' + id), {
      name: name,
      race: race,
      age: age
    }).then(() => {
      Alert.alert('Registro editado', 'El registro se ha editado exitosamente.');
    }).catch((error) => {
      console.error('Error al editar el registro: ', error);
      Alert.alert('Error', 'Hubo un problema al editar el registro.');
    });
  };

  const handleEliminar = () => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro que deseas eliminar este registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => eliminarRegistro(id) }
      ]
    );
  };

  const eliminarRegistro = (id: string) => {
    remove(ref(db, 'users/' + id)).then(() => {
      Alert.alert('Registro eliminado', 'El registro se ha eliminado exitosamente.');
      navigation.goBack();
    }).catch((error) => {
      console.error('Error al eliminar el registro: ', error);
      Alert.alert('Error', 'Hubo un problema al eliminar el registro.');
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Nombre'
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder='Raza'
        onChangeText={text => setRace(text)}
        value={race}
      />
      <TextInput
        style={styles.input}
        placeholder='Edad'
        onChangeText={text => setAge(text)}
        value={age}
      />
      <View style={styles.buttonContainer}>
        <Button title="Editar Registro" onPress={handleEditar} color={'green'}/>
        <Button title="Eliminar Registro" onPress={handleEliminar} color={'red'}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '80%',
    height: 45,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 25,
    borderColor: '#8089ab',
    borderWidth: 3,
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%'
  }
});

export default EditarEliminarScreen;
