import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import back from '../assets/images/back.png'
import locxoay from '../assets/images/kihieu.png'
import Aqua from '../assets/images/Aqua1.png'
import hoantat from '../assets/images/hoantat.png'
export default class LoadingScreen extends Component {
    render() {
        return (
            <View style={styles.bck}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.txt1}>CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ...</Text>
                <View style={styles.container}>
                    <Image style={styles.kihieu} source={kihieu} />
                    <Image style={styles.back} source={back} />
                    <Text style={styles.txtTram}>TRẠM</Text>
                    <Image style={styles.locxoay} source={locxoay} />
                    <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
                    <Text style={styles.txtCua}>của AQUAFINA</Text>
                    <Image style={styles.khung1} source={Aqua} />
                    <Text style={styles.txt2}>Tự động kết thúc sau:</Text> 
              <Text style={styles.txt3}>30 giây nữa </Text>
                    <View style={styles.circle}>
                        <View style={styles.circle2}>
                            <Text style={styles.txt30}>30</Text>
                            <Text style={styles.txtP}>ĐIỂM</Text>
                        </View>
                    </View>
                    <Image style={styles.hoantat} source={hoantat}/> 

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bck: {
        position: "absolute",
        width: 1080,
        height: "100%",
        backgroundColor: "#EAF0F8",
    },
    logo: {
        position: 'absolute',
        width: 100,
        height: 30,
        marginLeft: 150,
        marginRight: 28,
        marginTop: 10,
    },
    txt1: {
        position: "absolute",
        width: 380,
        height: 30,
        marginLeft: 25,
        marginTop: 70,
        fontWeight: "700",
        fontSize: 20,
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        color: "#0047BA",
    },

    locxoay: {
        position: 'absolute',
        width: 70,
        height: 30,
        marginLeft: 285,
        marginTop: 15,

    },
    container: {
        position: "absolute",
        width: 380,
        height: 570,
        marginLeft: 15,
        marginTop: 120,
        backgroundColor: "#FFFFFF",
        borderRadius: 40,
    },
    kihieu: {
        position: "absolute",
        width: 380,
        height: "100%",
        marginLeft:1,
        marginBottom:100,
        Color: "#EAF0F8",

    },
    back: {
        position: "absolute",
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 10,
    },
    txtTram: {
        position: "absolute",
        width: 100,
        height: 100,
        marginLeft: 280,
        marginTop: 10,
        fontSize: 25,
        fontWeight: "900",
        textAlign: "center",
        color: "#1545A5"
    },
    txtTaiSinh: {
        position: "absolute",
        width: 100,
        height: 80,
        marginLeft: 280,
        marginTop: 38,
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        color: "#1545A5"
    },
    txtCua: {
        position: "absolute",
        width: 100,
        height: 100,
        marginLeft: 280,
        marginTop: 60,
        fontSize: 13,
        fontWeight: "450",
        textAlign: "center",
        color: "#1545A5"
    },
    circle: {
        position: "absolute",
        width: 200,
        height: 200,
        marginLeft: 90,
        marginTop: 200,
        backgroundColor: "#E6EDF9",
        borderRadius: 100,
    },
    circle2: {
        position: "absolute",
        width: 160,
        height: 160,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        shadowColor: "rgba(155, 192, 255, 0.77)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txt30: {
        position: "absolute",
        width: 100,
        height: 80,
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: 50,
        marginLeft: 30,
        marginTop: 40,
        textAlign: "center",
        color: "#1545A5",

    },
    txtP: {
        position: "absolute",
        width: 100,
        height: 50,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 25,
        marginLeft: 30,
        marginTop: 95,
        textAlign: "center",
        color: "#6691D6",

    },
    khung1:{
        position:"absolute",
        width:"98%",
        height:80,
        marginLeft:5,
        marginTop:410,
    },
    txt2:{
        position:"absolute",
          width:250,
          height:100,
        //   marginLeft:5,
          marginTop:520,
          fontSize:18,
          fontWeight:"450",
          textAlign:"center",
          color:"#707172",
      },
      txt3:{
        position:"absolute",
        width:300,
        height:100,
        marginLeft:125,
        marginTop:520,
        fontSize:20,
        fontWeight:"900",
        textAlign:"center",
        color:"#FA4238",
      },
      hoantat:{
        position:'absolute',
        width:110,
        height:110,
        marginLeft:130,
        marginRight:28,
        marginTop:570,
      }

})
