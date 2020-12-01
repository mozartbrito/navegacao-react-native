import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions,
    TouchableOpacity
} from 'react-native';

import estilo from '../Estilos/estilo'
import Menu from '../../Components/menu'

const Home = ({navigation}) => {
    return (
        <View style={estilo.container}>
            <Image
                source={require('../../../assets/images/dog-cat.jpg')}
                style={estilo.imagem}
            />
            <Text>Página inicial</Text>
            <Menu navigation={navigation} />
        </View>
    )
}


export default Home