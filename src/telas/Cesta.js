import React from "react"
import { Image, StyleSheet, Dimensions, Text, View } from "react-native"
import Topo from "../../assets/topo.png"
import Logo from "../../assets/logo.png"

const width = Dimensions.get("screen").width

export default function Cesta(){
    return <>
    <Image source={Topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhe da cesta</Text>
    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={Logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        
        <Text style={estilos.descricao}>
            Uma cesta com produtos selecionados cuidadosamente da fazenda direto pra sua cozinha.    
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width:'100%',
        height: 578/768 * width
    },
    titulo:{
        position: "absolute",
        width: "100%",
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda:{
        width: 32,
        height: 32
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao:{
        color:"#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})