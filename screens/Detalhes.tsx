import * as React from "react"
import {View,Text,Image, TouchableOpacity, ScrollView, PanResponder} from 'react-native'
import {ipserver} from "../config/settings"
import {styles} from "../css/Styles"
import {AntDesign} from '@expo/vector-icons'
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
              <ScrollView horizontal={false}>
            <View style={styles.display}>
              
            
                    <View style={styles.cxproduto}>
                        <Image source={{uri:`${produtos.foto}`}} style={styles.fotodetalhe}/>
                        <Text style={styles.nomeproduto}>{produtos.nomeproduto}</Text>
                        <Text style={styles.nomeproduto}>{produtos.descricao}</Text>
                        <Text style={styles.preco}>{produtos.preco}</Text>
                        <Text style={styles.preco}>Codigo do produto:{produtos._id}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        adicionarCarrinho(produtos);
                    }} style={styles.btncarrinho}>
                        <Text style={styles.txtcarrinho}><AntDesign name='shoppingcart' size={20} color={'#fff'}/> Carrinho</Text>

                    </TouchableOpacity>
                   
            </View>
            </ScrollView>
        </View>
    );
}
function adicionarCarrinho(dados){
    fetch(`${ipserver}/carrinho/adicionar`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            idproduto:dados._id,
            nomeproduto:dados.nomeproduto,
            preco:dados.preco,
            foto:dados.foto
        })
    })
    .then((response)=>response.json())
    .then((resultado)=>alert(resultado.rs))
    .catch((error)=>alert(`Não foi possivel adicionar 💀- ${error}`))
}
