import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Section() {
    return(
        <View style={stylesSection.container}>
            <View style={stylesSection.linha}>

                <TouchableOpacity style={stylesSection.coluna}>
                        <Image
                        source={{uri:'https://img.icons8.com/ios7/600/search.png'}}
                        style={stylesSection.icons}
                        ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={stylesSection.coluna}>
                        <Image
                        source={{uri:'https://png.pngtree.com/png-vector/20240109/ourmid/pngtree-vector-bar-chart-with-uptrend-arrow-isolated-on-white-background-png-image_11430461.png'}}
                        style={stylesSection.icons}
                        ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={stylesSection.coluna}>
                        <Image
                        source={{uri:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png'}}
                        style={stylesSection.icons}
                        ></Image>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const stylesSection = StyleSheet.create({
    container:{
        padding: 10,
    },
     linha:{
         flex: 1,
         flexDirection: "row",
    },
    icons:{
        height: 80,
        width: 80,
    },
    coluna:{
        padding: 1,
        width: 90,
        height: 90,
        backgroundColor:'#fff',
        margin: 5,
        flex:1,
        flexDirection:'column',
        borderRadius: 15,
        alignItems: 'center',
    },
});