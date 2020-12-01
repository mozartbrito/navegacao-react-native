import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Menu from '../../Components/menu';

import estilo from '../Estilos/estilo'

const Fotos = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <View style={estilo.imagens}>
                <Image
                    source={require('../../../assets/images/bird.jpg')}
                    style={estilo.imagemFoto}
                />
                <Image
                    source={require('../../../assets/images/cat.jpg')}
                    style={estilo.imagemFoto}
                />
                <Image
                    source={require('../../../assets/images/fox.jpg')}
                    style={estilo.imagemFoto}
                />
                <Image
                    source={require('../../../assets/images/dog-friendly.jpg')}
                    style={estilo.imagemFoto}
                />
            </View>
            
            <Text>Fotos</Text>
            <Menu navigation={navigation} />
        </View>
    )
}


export default Fotos