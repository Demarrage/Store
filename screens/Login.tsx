import * as React from "react"
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import {ipserver} from "../config/settings"
import { styles } from "../css/Styles"
let us = "";
let sh = "";
export default function Login (){
    const[usuario,setUsuario]= React.useState("");
    const[senha,setSenha]= React.useState("");
    return(
        <View>
            <TextInput placeholder="Usuarío"
            style={styles.input}
            onChangeText={(value)=>setUsuario(value)}
            value={usuario}
            />
            <TextInput placeholder="Senha"
            secureTextEntry 
            style={styles.input}
            onChangeText={(value)=>setSenha(value)}
            value={senha}
            />
            <TouchableOpacity onPress={()=>{
                us = usuario;
                sh = senha;
                efetuarLogin();
            }}
            style={styles.btncarrinho}>
            <Text style={styles.txtcarrinho}> Logar </Text>
            </TouchableOpacity>
        </View>
    );
}
function efetuarLogin(){
    fetch(`${ipserver}usuario/login`,{
        method:'POST',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nomeusuario:us,
            senha:sh
        })
    }).then((response)=>response.json())
    .then((response)=>console.log(resultado))
    .catch((erro)=>console.error(`Erro ao tentar logar ${erro}`))
}