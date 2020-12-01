import React from 'react';
import {
    StyleSheet, 
    Dimensions
} from 'react-native';

const largura = Dimensions.get("screen").width;


const estilo = StyleSheet.create({
    imagem: {
        width: largura * 0.8,
        height: largura * 0.8,
        margin: 10
    },
    imagemFoto: {
        width: largura * 0.4,
        height: largura * 0.4,
        margin: 10
    },
    imagens: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    botao: {
        width: largura * 0.6,
        backgroundColor: '#2196f3',
        color: '#fff',
        padding: 8,
        textTransform: 'uppercase',
        fontWeight:'bold',
        textAlign: 'center',
        margin: 5,
        borderRadius: 5
    }
})

export default estilo