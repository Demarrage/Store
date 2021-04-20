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
        width:"45%",
        margin:7,
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
    }
})