import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen({navigation} : any ) {
  return (
    <ImageBackground 
      source={{uri: 'https://i.pinimg.com/originals/14/be/a9/14bea97986a9a3af9ef4b65842162303.jpg'}} 
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.texto}>Dilan Torres</Text>
        <View style={{paddingTop: '50%'}}>
        <Image style={styles.gif} source={{uri: 'https://media.tenor.com/y10t8QvSnA0AAAAM/goku-jump-transformation.gif'}}/>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Tabs")}>
            <Text style={styles.textoBoton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imagen: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 45,
    color: 'white',
    fontWeight: '900',
    margin: 15,
  },
  gif: {
    width: 350,
    height: 125,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  textoBoton: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
