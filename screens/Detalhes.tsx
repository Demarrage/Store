import * as React from "react"
import {View,Text,Image} from 'react-native'
import {ipserver} from "../config/settings"
import {styles} from "../css/Styles"
export default function Detalhes({route}){
    const{idprodutos} = route.params;
    console.log(route.params)
    //vamos construir uma estrutura oara carregar os dados sobre os produtos que virão do banco de dados.
    // Iremos cruar um array(lista) com o uso de uma constante chamada produtos
    const[produtos,setProdutos] = React.useState([]);
    // O comando React.useEffect é executadi yma vez ao abrir a tela home.
    // Ele será responsavel por carregar os dados do servidor
    React.useEffect(()=>{
        fetch(`${ipserver}/produto/codproduto/${idprodutos}`)
        .then((response)=>response.json())
        .then((resultado)=>setProdutos(resultado.res))
        .catch((erro)=>console.error(`Erro ao tentar carregar os produtos -> ${erro}`))
    },[])
    return(
        <View style ={styles.container}>
            <Text>Tela Home</Text>
            <View style={styles.display}>
            
                    <View style={styles.cxproduto}>
                        <Image source={{uri:`${produtos.foto}`}} style={styles.foto}/>
                        <Text style={styles.nomeproduto}>{produtos.nomeproduto}</Text>
                        <Text style={styles.preco}>{produtos.preco}</Text>
                    </View>
            </View>
        </View>
    );
}