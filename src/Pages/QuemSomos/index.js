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

const Quemsomos = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <Image
                source={require('../../../assets/images/dog-happy.jpg')}
                style={estilo.imagem}
            />
            <Text>Quem Somos</Text>
            <Menu navigation={navigation} />
        </View>
    )
}


export default Quemsomos