import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    foto:{
    width:"100%",
    height:250,
    resizeMode:'cover'
    },
    nomeproduto:{
        fontSize:15,
        fontWeight:'bold'
    },
    preco:{
        fontSize:18,
        color:'#070'
    },
    cxproduto:{
        
        // borderColor:'black',
        // borderWidth:1,
        shadowColor:'#000',
        shadowOpacity:0.8,
        shadowRadius:10,
        shadowOffset:{width:10, heigth:10},
        elevation:2,
        padding:6
    },
    display:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    acesso:{
        width:191,
        margin:7,
    },
    fotodetalhe:{
        width:400,
        height:500
    },
    btncarrinho:{
        backgroundColor:'rgb(0,0,0)',
        width:150,
        marginLeft:'auto',
        marginRight:'auto',
        padding:10,
        borderRadius:50,
    },
    txtcarrinho:{
        color:'#fff',
        fontWeight:'bold'

    },
    input:{
        width:300,
        padding:10,
        marginBottom:5,
        borderBottomColor:'silver',
        borderBottomWidth:1,
        marginLeft:'auto',
        marginRight:'auto',
    },
    btncadastro:{
        backgroundColor:'rgb(0,0,0)',
        width:100,
        height:100,
        borderRadius:50,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:50,
        paddingTop:40,
        shadowColor:'black',
        shadowOffset:{width:5, height:5},
        shadowOpacity:0.9,
        shadowRadius:5,
        elevation:10    
        
    }
})