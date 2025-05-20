import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Section() {
    return(
        <View style={stylesMain2.container}>
            <View style={stylesMain2.linha}>

                <View style={stylesMain2.coluna}>
                    <TouchableOpacity>
                        <Text style={stylesMain2.texto}>
                            <TouchableOpacity>
                                <View style={{height: 15, width: 15, backgroundColor: '#f00', borderRadius: 50}}></View>
                            </TouchableOpacity>
                            INCOMES</Text>
                        <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>$267</Text>
                    </TouchableOpacity>
                </View>

                <View style={stylesMain2.barra}>
                    </View>

                <View style={stylesMain2.coluna}>
                    <TouchableOpacity>
                        <Text style={stylesMain2.texto}>
                            <TouchableOpacity>
                                <View style={{height: 15, width: 15, backgroundColor: '#000', borderRadius: 50}}></View>
                            </TouchableOpacity>
                            EXPENSES</Text>
                        <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>$255</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
const stylesMain2 = StyleSheet.create({
    linha:{
        flex: 1,
        flexDirection: "row",
    },
    coluna:{
        marginVertical: 30,
        marginHorizontal: 10,
        width: 100,
        flex: 1,
        flexDirection:'column',
        height: 100,
        backgroundColor:'#fff',
    },
    texto:{
        fontSize: 15,
        textAlign: 'center',
    },
    barra:{
        borderLeftColor: '#000',
        borderLeftWidth: 2,
        marginVertical: 20,
    }
});