import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../Config/Config';

interface UserData {
  id: string;
  name: string;
  race: string;
  age: string;
}

export default function Informacion() {
  const [id, setId] = useState('');
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    if (id.trim() !== '') {
      const userRef = ref(db, `users/${id}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const userDataArray: UserData[] = [{
            id: id,
            name: data.name,
            race: data.race,
            age: data.age,
          }];
          setUserData(userDataArray);
        } else {
          setUserData([]);
        }
      });
    } else {
      setUserData([]);
    }
  }, [id]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Información</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingresar ID'
        keyboardType='numeric'
        onChangeText={(text) => setId(text)}
        value={id}
      />
      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>ID: {item.id}</Text>
            <Text>Nombre:{item.name}</Text>
            <Text>Raza: {item.race}</Text>
            <Text>Edad: {item.age}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No hay datos para mostrar</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 20,
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
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
