import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Section() {
    return(
        <View style={stylesSection2.container}>
            <View style={stylesSection2.linha}>
                <View style={stylesSection2.coluna}>
                    <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 400}}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const stylesSection2 = StyleSheet.create({
    linha:{
        flex: 1,
        flexDirection: "row",
    },
    coluna:{
        width: 100,
        flex:1,
        flexDirection:'column',
        height: 100,
        backgroundColor:'#fff',
        padding: 10,
        
    }
});