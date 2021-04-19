import * as React from "react"
import {View,Text} from 'react-native'
import {ipserver} from "../config/settings"
export default function Home (){
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
        <View>
            <Text>Tela Home</Text>
        </View>
    );
}