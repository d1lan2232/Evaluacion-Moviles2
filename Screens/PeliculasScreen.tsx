import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Movie {
    titulo: string;
    anio: string;
    descripcion: string;
    enlaces: {
        url: string;
        trailer: string;
        image: string;
    };
    detalles: {
        duracion: string;
        director: string;
    };
}

export default function PeliculasScreen() {
    const API_Movies = "https://jritsqmet.github.io/web-api/peliculas2.json";
    const [data, setData] = useState<Movie[]>([]);

    useEffect(() => {
        fetch(API_Movies)
            .then(response => response.json())
            .then((datos: { peliculas: Movie[] }) => {
                setData(datos.peliculas);
                console.log(datos); 
            })
            .catch(error => {
                console.error('Error al cargar datos:', error);
                Alert.alert('Error', 'Hubo un problema al cargar los datos.');
            });
    }, []);

    function mensaje(item: Movie) {
        Alert.alert("Mensaje", `Descripción: ${item.descripcion}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Lista de Películas</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => mensaje(item)} style={styles.itemContainer}>
                        <Image source={{ uri: item.enlaces.image }} style={styles.image} />
                        <Text style={{ padding: 5, fontWeight: '800', fontSize: 17 }}>{item.titulo}</Text>
                        <Text style={{ padding: 5, fontWeight: '800', fontSize: 14 }}>{item.anio}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2ecfb',
    },
    texto: {
        fontSize: 27,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900',
        paddingBottom: 15,
        paddingTop: 10,
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
    },
});
