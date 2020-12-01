import React, {Fragment} from 'react';
import { 
    Text, 
    TouchableOpacity
} from 'react-native';

import estilo from '../Pages/Estilos/estilo'

const Menu = ({navigation}) => {
    return (
        <Fragment>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={estilo.botao}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quemsomos')}>
                <Text style={estilo.botao}>Quem somos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Fotos')}>
                <Text style={estilo.botao}>Fotos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
                <Text style={estilo.botao}>Contato</Text>
            </TouchableOpacity>
        </Fragment>
    )
}

export default Menu