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

const Contato = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <Image
                source={require('../../../assets/images/panda.jpg')}
                style={estilo.imagem}
            />
            <Text>Contato</Text>
            <Menu navigation={navigation} />
        </View>
    )
}


export default Contato