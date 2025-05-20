import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function Main() {
    return (
        <View style={stylesMain.container}>

            <View style={stylesMain.linha}>
                
                <View style={stylesMain.coluna}>
                    <TouchableOpacity>
                        <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png'}} style={stylesMain.config}></Image>
                    </TouchableOpacity>
                    <Text style={{fontSize: 15}}>Lorem ipsum dolot</Text>
                    <Text style={{fontSize: 35, fontWeight: 'bold'}}>$236,678.25</Text>
                </View>
                
            </View>

        </View>
    );
}
const stylesMain = StyleSheet.create({
    container:{
        padding: 10,
    },
     linha:{
         flex: 1,
         flexDirection: "row",
    },
    config:{
        height: 35,
        width: 35,
        marginLeft: 290,
    },
    coluna:{
        padding: 1,
        width: 100,
        height: 140,
        backgroundColor:'#fff',
        margin: 5,
        flex:1,
        flexDirection:'column',
        borderRadius: 15,
        alignItems: 'center',
    },
    
});