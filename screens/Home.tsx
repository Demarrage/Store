import * as React from "react"
import {View,Text,Image} from 'react-native'
import {ipserver} from "../config/settings"
import {styles} from "../css/Styles";
import {createStackNavigator} from "@react-navigation/stack";
import Detalhes from "./Detalhes";
import { TouchableOpacity } from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native"
const Stack = createStackNavigator();
export default function Home(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="ListarProdutos" component={ListarProdutos}/>
                <Stack.Screen name="Detalhes" component={Detalhes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )}
        function ListarProdutos({navigation}){
    
    //vamos construir uma estrutura oara carregar os dados sobre os produtos que virão do banco de dados.
    // Iremos cruar um array(lista) com o uso de uma constante chamada produtos
    const[produtos,setProdutos] = React.useState([]);
    // O comando React.useEffect é executadi yma vez ao abrir a tela home.
    // Ele será responsavel por carregar os dados do servidor
    React.useEffect(()=>{
        fetch(`${ipserver}/produto/listar`)
        .then((response)=>response.json())
        .then((resultado)=>setProdutos(resultado.rs))
        .catch((erro)=>console.error(`Erro ao tentar carregar os produtos -> ${erro}`))
    },[])
    return(
        <View style ={styles.container}>
            <Text>Tela Home</Text>
            <View style={styles.display}>
            {
                
                produtos.map((item,ix)=>(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Detalhes",{idprodutos:`${item._id}`})
                    }} style={styles.acesso}>
                    <View key={item._id} style={styles.cxproduto}>
                        <Image source={{uri:`${item.foto}`}} style={styles.foto}/>
                        <Text style={styles.nomeproduto}>{item.nomeproduto}</Text>
                        <Text style={styles.preco}>{item.preco}</Text>
                    </View>
                    </TouchableOpacity>
                ))
            }
            </View>
        </View>
    );
}