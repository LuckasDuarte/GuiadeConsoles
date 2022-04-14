import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import * as WebBrowser from 'expo-web-browser';



//fundos
const fundoPlaystation = require('../imagesArchives/fundoPlaystation.jpg')
const console = require('../imagesArchives/play5.jpg')
const MaisGames = require('../imagesArchives/fundoGames.jpg')

//fotos Gamaes
const SpiderMan = require('../imagesArchives/spiderman.jpg')
const TheLastOfUs = require('../imagesArchives/TheLastOfUs.jpg')
const Horizon = require('../imagesArchives/horizonforbiden.jpg')
const GodOfWar = require('../imagesArchives/GodOfWar.jpg')

//Fanalizado playstation





//links
const FichaTecnica = ('https://canaltech.com.br/produto/sony/playstation-5/')
  const abrirFicha= async (FichaTecnica) =>{
    let result = await WebBrowser.openBrowserAsync(FichaTecnica);
}

//link spiderman
const SpiderManSobre = ('https://www.playstation.com/pt-br/games/marvels-spider-man//')
  const abrirSpider= async (SpiderMan) =>{ 
    let result = await WebBrowser.openBrowserAsync(SpiderManSobre);
}

//link The Last of Us
const TheLastOfUsSobre = ('https://store.playstation.com/pt-br/product/UP9000-CUSA07820_00-THELASTOFUSPART2/')
  const abrirTheLast= async (TheLastOfUsSobre) =>{
    let result = await WebBrowser.openBrowserAsync(TheLastOfUsSobre);
}

//link Horizon Forbiden West
const HorizonSobre = ('https://www.playstation.com/pt-br/games/horizon-forbidden-west/')
  const abrirHorizon= async (HorizonSobre) =>{
    let result = await WebBrowser.openBrowserAsync(HorizonSobre);
}

//link god of war
const GOFSobre = ('https://store.steampowered.com/app/1593500/God_of_War/')
  const abrirGOF= async (GOFSobre) =>{
    let result = await WebBrowser.openBrowserAsync(GOFSobre);
}

//Mais Games
const MaisGamesSobre = ('https://www.playstation.com/pt-br/ps4/ps4-games/')
  const abrirMaisGames= async (MaisGames) =>{
    let result = await WebBrowser.openBrowserAsync(MaisGames);
}



const Playstation = () => {
    return(
        <View>
            <StatusBar style='light'/>

                <ImageBackground source={fundoPlaystation} style={styles.fundo}>

                    <Text style={styles.title}>
                        Playstation 5
                    </Text>

                    <Image
                        source={console}
                        style={styles.ps5}
                    />

                    <TouchableOpacity 
                        onPress={() => abrirFicha(FichaTecnica)}
                    style={styles.btnFicha}
                    >
                        <Text style={styles.txtbtnFicha}>
                            Ver Ficha Técnica
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.txtJogos}>
                        Top Jogos
                    </Text>







                    
                    <ImageBackground source={SpiderMan} style={styles.Spiderman}>
                            <TouchableOpacity 
                            onPress={() => abrirSpider(SpiderManSobre)}
                            style={styles.btnSobre}>
                                <Text style={styles.sobretxt}>
                                    Sobre
                                 </Text>
                            </TouchableOpacity>
                    </ImageBackground>
                    
                        
                        <ImageBackground source={TheLastOfUs} style={styles.tlofus}>
                            <TouchableOpacity
                            onPress={() => abrirTheLast(TheLastOfUsSobre)}
                            style={styles.btnSobre}>
                                <Text style={styles.sobretxt}>
                                    Sobre
                                 </Text>
                            </TouchableOpacity>
                        </ImageBackground>


                    <ImageBackground source={Horizon} style={styles.Horizon}>
                        <TouchableOpacity 
                        onPress={() => abrirHorizon(HorizonSobre)}
                        style={styles.btnSobre}>
                                <Text style={styles.sobretxt}>
                                    Sobre
                                 </Text>
                            </TouchableOpacity>
                    </ImageBackground>


                    <ImageBackground source={GodOfWar} style={styles.GodofWar}>
                        <TouchableOpacity 
                        onPress={() => abrirGOF(GOFSobre)}
                        style={styles.btnSobre}>
                                <Text style={styles.sobretxt}>
                                    Sobre
                                 </Text>
                            </TouchableOpacity>
                    </ImageBackground>

                    <ImageBackground source={MaisGames} style={styles.fundoMaisGames}> 
                        <TouchableOpacity
                        onPress={() => abrirMaisGames(MaisGamesSobre)}
                        >
                            <Text style={styles.MaisGamestxt}>
                                Mais Games
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    
                   

                </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    fundo:{
        width:'100%',
        height:'100%'
    },
    title:{
        color:'white',
        textAlign:'center',
        top:50,
        fontSize:30,
        fontWeight:'bold'
        
    },
    ps5:{
        width:250,
        height:150,
        top:60,
        left:60,
        borderRadius:50,
        
    },
    btnFicha:{
       backgroundColor:'#fff',
       width:185,
       height:35,
       left:90,
       top:85,
       borderRadius:20,
       
    },
    txtbtnFicha:{
        textAlign:'center',
        fontSize:18,
        top:2,
    },
    txtJogos:{
        width:185,
        color:'white',
        textAlign:'center',
        top:100,
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:'rgba(0,0,0,0.5)',
        left:90,
        borderRadius:15
    },
    Spiderman:{
        width:120,
        height:120,
        top:110,
        left:50,
        borderRadius:15,
        overflow:'hidden',
        
        
    },
    tlofus:{
        width:120,
        height:120,
        left:190,
        bottom:10,
        overflow:'hidden',
        borderRadius:15
    },
    Horizon:{
        width:120,
        height:120,
        overflow:'hidden',
        left:50,
        borderRadius:15,
    },
    GodofWar:{
        width:120,
        height:120,
        left:190,
        bottom:120,
        overflow:'hidden',
        borderRadius:15,
    },
    
    MaisGamestxt:{
        color:'white',
        textAlign:'center',
        fontSize:28,
        backgroundColor:'rgba(0,0,0,0.5)',
        height:120,
    },
    fundoMaisGames:{
        width:210,
        height:50,
        bottom:100,
        left:75,
        overflow:'hidden',
        borderRadius:15,
    },
    btnSobre:{
        backgroundColor:'rgba(0,0,0,0.6)',
        top:90,
        height:30
    },
    sobretxt:{
        color:'white',
        textAlign:'center',
        fontSize:20
    },
    
    
    
    
})



export default Playstation;

