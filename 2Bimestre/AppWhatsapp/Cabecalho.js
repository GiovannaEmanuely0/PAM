import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';


export default function Cabecalho() {
    return(
        <View style={stylesCabecalho.container}>
            <View style={stylesCabecalho.cabecalho}>
                <Text style={stylesCabecalho.texto}>WhatsApp</Text>
                <View style={stylesCabecalho.icons}>
                    <TouchableOpacity><Ionicons style={stylesCabecalho.icone} name="camera"></Ionicons></TouchableOpacity>
                    <TouchableOpacity><Ionicons style={stylesCabecalho.icone} name="menu"></Ionicons></TouchableOpacity>
                </View>
                </View>
        </View>
    );
}

const stylesCabecalho = StyleSheet.create({
    cabecalho:{
        height: 70,
        width: '100%',
        backgroundColor: '#075E54',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    texto:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
    },
    icone:{
        color: '#fff',  
        fontSize: 30,
        marginLeft: 20,
    },
});