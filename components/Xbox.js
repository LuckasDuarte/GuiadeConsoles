import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';;



const fundo = require('../xbox/fundoXbox.jpg');
const XboxseriesX = require('../xbox/XboxseriesX.png');
const Forza = require('../xbox/forza5.jpg')
const Gear = require('../xbox/gear5.jpg')
const MaisGames = require('../imagesArchives/fundoGames.jpg')




//Ficha tecnica
const FichaTecnica = ('https://canaltech.com.br/produto/microsoft/xbox-series-x/')
  const abrirFicha= async (FichaTecnica) =>{
    let result = await WebBrowser.openBrowserAsync(FichaTecnica);
};

//sobre o forza
const ForzaSobre = ('https://www.xbox.com/pt-BR/games/forza-horizon-5')
    const abrirForza = async (ForzaSobre) => {
        let result = await WebBrowser.openBrowserAsync(ForzaSobre)
};

//Sobre Gear 5
const GearSobre = ('https://www.xbox.com/pt-BR/games/gears-5')
    const abrirGear = async (GearSobre) => {
        let result = await WebBrowser.openBrowserAsync(GearSobre)
};

//Mais Games
const MaisJogos = ('https://www.xbox.com/pt-BR/games/optimized')
    const abrirGames = async (MaisJogos) => {
        let result = await WebBrowser.openBrowserAsync(MaisJogos)
};





const Xbox = () => {
    return(
        <View>
            <StatusBar style='light'/>
            <ImageBackground style={styles.fundoXbox} source={fundo}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        Xbox Series X
                    </Text>
                </View>

                <View style={styles.containerImage}>
                    <Image source={XboxseriesX} style={styles.ImgXbox}/>
                </View>

                    <View  style={styles.btnFicha}>
                        <TouchableOpacity
                            onPress={() => abrirFicha(FichaTecnica)}
                        >
                            <Text style={styles.txtFicha}> 
                               Ver Ficha Tecnica
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View > 
                        <Text style={styles.topjogos}>
                        Top Jogos
                        </Text>
                    </View>


                <ImageBackground source={Forza} style={styles.forzastyle}>
                    <TouchableOpacity style={styles.btnSobre}
                        onPress={() => abrirForza(ForzaSobre)}
                    >
                        <Text style={styles.txtSobre}>
                            Sobre
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground source={Gear} style={styles.imgGear}>
                    <TouchableOpacity style={styles.btnSobre}
                        onPress={()=> abrirGear(GearSobre)}
                    >
                        <Text style={styles.txtSobre}>
                            Sobre
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground source={MaisGames} style={styles.Maisgames}> 
                        <TouchableOpacity
                           onPress={() => abrirGames(MaisJogos)}
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
    fundoXbox:{
        width:'100%',
        height:'100%'
    },
    containerTitle:{
        textAlign:'center',
        justifyContent:'center'
    },
    title:{
        color:'white',
        textAlign:'center',
        top:55,
        fontSize:26,
        fontWeight:'bold',
    },
    containerImage:{
        justifyContent:'center',
        alignItems:'center',
        top:80
    },
    ImgXbox:{
        width:220,
        height:220,
        borderRadius:15,
        borderColor:'white',
        borderWidth:0.4,
    },
    btnFicha:{
        justifyContent:'center',
        alignItems:'center',
        top:100,
        backgroundColor:'white',
        width:200,
        height:35,
        left:80,
        borderRadius:15,
    },
    txtFicha:{
        color:'black',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    forzastyle:{
        width:120,
        height:120,
        left:40,
        top:150,
        overflow:'hidden',
        borderRadius:15
    },
    topjogos:{
        color:'black',
        backgroundColor:'rgb(51, 175, 40)',
        fontWeight:'bold',
        width:150,
        fontSize:21,
        top:120,
        textAlign:'center',
        left:105,
        borderRadius:15,
        borderBottomColor:'white',
        borderTopColor:'white',
        borderWidth:2,
    },
    
    txtSobre:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    },
    btnSobre:{
        backgroundColor:'rgba(0,0,0,0.5)',
        top:90,
        height:30
    },
    imgGear:{
        width:120,
        height:120,
        left:180,
        top:30,
        overflow:'hidden',
        borderRadius:15,
    },
    Maisgames:{
        width:210,
        height:50,
        left:75,
        overflow:'hidden',
        borderRadius:15,
        top:80,
    },
    MaisGamestxt:{
        color:'white',
        textAlign:'center',
        fontSize:28,
        backgroundColor:'rgba(0,0,0,0.5)',
        height:120,
    },
    


















})
export default Xbox;




{/*
    estilo do titulo
    borderRadius:10,
        borderColor:'white',
        borderWidth:2,
        padding:10, 
*/}