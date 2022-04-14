import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';;
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


//imagem de fundo
const fundo = require('../nintendo/fundoNitendo.jpg')

//imagem do Nintendo
const consoleN = require('../nintendo/NintendoSwitch.jpg')

//mario
const mario = require('../nintendo/mario.jpg')

//pokemon
const pokemon = require('../nintendo/pokemon.png')

//mais games
const MaisGames = require('../imagesArchives/fundoGames.jpg')

//ficha tecnica
const FichaTecnica = ('https://www.nintendo.com/pt_BR/switch/system/')
  const abrirFicha= async (FichaTecnica) =>{
    let result = await WebBrowser.openBrowserAsync(FichaTecnica);
};

//mario
const MarioSobre = ('https://marioparty.nintendo.com/')
    const abrirMario = async (MarioSobre) => {
        let result = await WebBrowser.openBrowserAsync(MarioSobre)
};

//pokemon
const pokemonSobre = ('https://www.nintendo.com/pt_BR/games/detail/pokemon-legends-arceus-switch/')
    const abrirpokemon = async (pokemonSobre) => {
        let result = await WebBrowser.openBrowserAsync(pokemonSobre)
};

//mais games
const MaisJogos = ('https://www.nintendo.com/pt_BR/games/')
    const abrirGames = async (MaisJogos) => {
        let result = await WebBrowser.openBrowserAsync(MaisJogos)
};






const Nintendo = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

           <ImageBackground source={fundo} style={styles.fundoNitendo}>

                <Text style={styles.title}>
                    Nintendo Switch
                </Text>

            <Image source={consoleN} style={styles.imgNintendo}/>


            <TouchableOpacity style={styles.btnFicha}
                onPress={() => abrirFicha(FichaTecnica)}
            >
                <Text style={styles.txtFicha}>
                    Ver Ficha Técnica
                </Text>
            </TouchableOpacity>

            <View style={styles.topContainer}>
                <Text style={styles.txtTop}>
                    Top Jogos
                </Text>
            </View>

            <ImageBackground source={mario}
            style={styles.imgMario}>
                <TouchableOpacity 
                    onPress={()=> abrirMario(MarioSobre)}
                style={styles.btnSobre}>
                    <Text style={styles.txtsobre}>
                        Sobre
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

            <ImageBackground 
            source={pokemon}
            style={styles.pokemon}>
                <TouchableOpacity 
                    onPress={()=> abrirpokemon(pokemonSobre)}
                style={styles.btnSobre}>
                    <Text style={styles.txtsobre}>
                        Sobre
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

            <ImageBackground source={MaisGames} style={styles.Maisgames}> 
                        <TouchableOpacity
                           onPress={()=> abrirGames(MaisJogos)}
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
    fundoNitendo:{
        width:'100%',
        height:'100%',
    },
    imgNintendo:{
        width:240,
        height:180,
        top:70,
        left:60,
        overflow:'hidden',
        borderRadius:15,
    },
    title:{
        color:'white',
        textAlign:'center',
        top:55,
        fontSize:30,
        fontWeight:'bold',
    },
    btnFicha:{
        alignItems:'center',
        top:100,
        backgroundColor:'#fc6363',
        width:170,
        height:45,
        left:95,
        padding:5,
        borderRadius:15,
        alignItems:'center',
    },
    txtFicha:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        top:6
    },
    topContainer:{
        alignItems:'center',
        top:120
    },
    txtTop:{
        backgroundColor:'#fff',
        width:130,
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        borderRadius:15
    },
    imgMario:{
        width:150,
        height:150,
        top:140,
        left:20,
        overflow:'hidden',
        borderRadius:15
    },
    txtsobre:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    },
    btnSobre:{
        backgroundColor:'rgba(0,0,0,0.5)',
        top:120,
        height:30
    },
    pokemon:{
        width:150,
        height:150,
        overflow:'hidden',
        borderRadius:15,
        left:190,
        bottom:10
    },
    Maisgames:{
        width:210,
        height:50,
        left:75,
        overflow:'hidden',
        borderRadius:15,
        top:40,
    },
    MaisGamestxt:{
        color:'white',
        textAlign:'center',
        fontSize:28,
        backgroundColor:'rgba(0,0,0,0.5)',
        height:120,
    }




})






export default Nintendo;