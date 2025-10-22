import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Menu() {
    return(
        <View style={stylesMenu.container}>
            <View style={stylesMenu.rodape}>
                <TouchableOpacity><Ionicons style={stylesMenu.icons} name="chatbubbles"></Ionicons><Text style={stylesMenu.texto}>Conversas</Text></TouchableOpacity>
                <TouchableOpacity><Ionicons style={stylesMenu.icons} name="disc-outline"></Ionicons><Text style={stylesMenu.texto}>Atualizações</Text></TouchableOpacity>
                <TouchableOpacity><Ionicons style={stylesMenu.icons} name="people-outline"></Ionicons><Text style={stylesMenu.texto}>Comunidades</Text></TouchableOpacity>
                <TouchableOpacity><Ionicons style={stylesMenu.icons} name="call-outline"></Ionicons><Text style={stylesMenu.texto}>Ligações</Text></TouchableOpacity>
            </View>
        </View>
    );
}
const stylesMenu = StyleSheet.create({
    rodape:{
        height: 70,
        width: '100%',
        backgroundColor: '#075E54',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    icons:{
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
    },
    texto:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});