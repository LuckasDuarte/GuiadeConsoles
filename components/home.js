import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


//carrosel de imagens automatico react native
//https://www.youtube.com/watch?v=HAgJqaJc-ck

//Imagens
const imgNoticias = require('../imagesArchives/noticiasLogo.jpg')
const fundoHome = require('../imagesArchives/fundo4k.jpg')
const musicas = require('../imagesArchives/musicasLogo.png')
const produtos = require('../imagesArchives/setupLogo.jpg')
const Lucas = require('../imagesArchives/fotoLucas.jpg')


//adicionar a navegação nas Noticías
const Noticias = ('https://observatoriodegames.uol.com.br/noticias-de-games')
  const abrirNoticias= async (Noticias) =>{
    let result = await WebBrowser.openBrowserAsync(Noticias);
}
//https://www.comboinfinito.com.br/principal/category/games/
//https://observatoriodegames.uol.com.br/noticias-de-games

//navegar para musicas 
const Musica = ('https://www.youtube.com/watch?v=vZv9-TWdBJM&list=PLIP47OYBgdCVsV3aMlkrRo7eMF3O-t87P&index=1')
  const abrirMusica= async (Musica) =>{
    let result = await WebBrowser.openBrowserAsync(Musica);
}

//navegar para produtos
const Produtos = ('https://www.kabum.com.br/?msclkid=b1ac3d17d03016c415875f1c25e2fdbd&utm_source=bing&utm_medium=cpc&utm_campaign=_S_INST&utm_term=kaboom&utm_content=Ampla+e+Varia%C3%A7%C3%B5es')
  const abrirProdutos= async (Produtos) =>{
    let result = await WebBrowser.openBrowserAsync(Produtos);
}












const Home = () => {
   
    
    
    return(

        
        
        
        
        
        



        //Fundo e imagens 
        <View style={styles.container}>
            <StatusBar style='light'/>

        
            <ImageBackground source={fundoHome} style={styles.fundo}>

                <View style={styles.containerHeader}>
                    <Text style={styles.txtHeader}>
                      Home
                    </Text>
                </View>



                
                    <ImageBackground source={imgNoticias} style={styles.imgnoticias}>

                        <TouchableOpacity
                            onPress={() => abrirNoticias(Noticias)}
                        >
                            <Text style={styles.noticias}>Ultimas Noticías</Text>
                         </TouchableOpacity>
                    </ImageBackground>
                
                
            
                
                
                    <ImageBackground source={musicas} style={styles.imgMusicas}>

                        <TouchableOpacity
                        onPress={() => abrirMusica(Musica)}
                        >
                            <Text style={styles.musicas}>Músicas Para ouvir Jogando</Text>
                        </TouchableOpacity>

                    </ImageBackground>
                

                
                    <ImageBackground source={produtos} style={styles.imgSetup}>
                        <TouchableOpacity
                            onPress={()=> abrirProdutos(Produtos)}
                        >
                            <Text style={styles.setup}>Produtos</Text>
                        </TouchableOpacity>

                    </ImageBackground>
               

                    
            </ImageBackground>  
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    imgnoticias:{
        marginTop:50,
        width:295,
        height:130,
        marginLeft:34,
        borderRadius:50,
        overflow:'hidden',
        
    },
    container:{
        flex:1,
    },
    fundo:{
        width:'100%',
        height:'100%',
    },
    imgMusicas:{
        width:295,
        height:130,
        marginTop:90,
        marginLeft:34,
        borderRadius:50,
        overflow:'hidden',
        bottom:40
    },
    musicas:{
        textAlign:'center',
        color:'white',
        paddingTop:40,
        fontSize:28,
        fontWeight:'bold',
        backgroundColor:'rgba(0,0,0,0.2)',
        height:150
    },
    imgSetup:{
        width:295,
        height:130,
        marginTop:90,
        marginLeft:34,
        borderRadius:50,
        overflow:'hidden',
        bottom:80
    },
    setup:{
        textAlign:'center',
        color:'white',
        paddingTop:40,
        fontSize:38,
        fontWeight:'bold',
        backgroundColor:'rgba(0,0,0,0.4)',
        height:150
    },
    noticias:{
        textAlign:'center',
        color:'white',
        paddingTop:40,
        fontSize:30,
        fontWeight:'bold',
        backgroundColor:'rgba(0,0,0,0.4)',
        height:150
    },
    Lucas:{
        width:70,
        height:70,
        left:250,
        top:50,
        bottom:50,
        borderRadius:50,
        overflow:'hidden'
    },
    txtHeader:{
        height:110,
        color:'white',
        textAlign:'center',
        top:50,
        fontSize:35,
        left:130,
        fontWeight:'bold',
    },
    containerHeader:{
        flex:1,
        backgroundColor:'rgb(1, 5, 19)',
        flexDirection:'row'
    },
    btnContato:{
        top:60,
        left:300
    },
    labelContato:{
        color:'white',
        fontSize:13,
        right:8,
        fontWeight:'bold'
    },
    centeredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    //modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    

})



export default Home;



