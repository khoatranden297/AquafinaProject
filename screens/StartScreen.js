import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import locxoay from '../assets/images/kihieu.png'
import hinhSp from '../assets/images/hinhSp.png'
import ketthuc from '../assets/images/ketthuc.png'
export default class StartScreen extends Component {
  render() {
    const {navigation}= this.props;
    return (  
      <View style={styles.bck}>
        <Image style={styles.logo} source= {logo} />
         <Text style={styles.txt1}>HÃY CHO CHAI RỖNG VÀO MÁY</Text>
         <View style={styles.container}>
            <Image style={styles.kihieu} source={kihieu}/> 
            <Text style={styles.txtHuongdan}>Xem lại hướng dẫn </Text>
            <Text style={styles.txtTram}>TRẠM</Text>
              <Image style={styles.locxoay} source= {locxoay} /> 
              <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
              <Text style={styles.txtCua}>của AQUAFINA</Text>
              <Image style={styles.hinhSp} source={hinhSp}/> 
              <Text style={styles.txtLL}>Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái</Text>
              <Text style={styles.txt2}>Tự động kết thúc sau:</Text> 
              <Text style={styles.txt3}>30 giây nữa </Text>
              <Image style={styles.ketthuc} source={ketthuc}/> 
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
    logo:{
        position:'absolute',
        width:100,
        height:30,
        marginLeft:150,
        marginRight:28,
        marginTop:10,   
      },
      txt1:{
        position:"absolute",
        width:380,
        height:30,
        marginLeft:25,
        marginTop:70,
        fontWeight:"700",
        fontSize:25,
        display: "flex",
        alignItems:"flex-end",
        textAlign:"center",
        color:"#0047BA",
      },
      container:{
        position:"absolute",
        width:380,
        height:500,
        marginLeft:15,
        marginTop:130,
        backgroundColor:"#FFFFFF",
        borderRadius:40,
      },
      kihieu:{
        position:"absolute",
        width:380,
        height:500,
        Color:"#EAF0F8",
        
      },
    txtHuongdan:{
        position:"absolute",
        width:200,
        height:50,
        // marginLeft:2,
        marginTop:12,
        fontWeight:"450",
        fontSize:20,
        textAlign:"center",
        textDecorationLine: "underline",
        color:"#1545A5",
    },
    txtTram:{
        position:"absolute",
        width:100,
        height:100,
        marginLeft:280,
        marginTop:10,
        fontSize:25,
        fontWeight:"900",
        textAlign:"center",
        color:"#1545A5"
      },
      txtTaiSinh:{
        position:"absolute",
        width:100,
        height:80,
        marginLeft:280,
        marginTop:38,
        fontSize:20,
        fontWeight:"900",
        textAlign:"center",
        color:"#1545A5"
      },
      txtCua:{
        position:"absolute",
        width:100,
        height:100,
        marginLeft:280,
        marginTop:60,
        fontSize:13,
        fontWeight:"450",
        textAlign:"center",
        color:"#1545A5"
      },
      locxoay:{
        position:'absolute',
        width:70,
        height:30,
        marginLeft:285,
        marginTop:15,
        
      },
      hinhSp:{
          position:"absolute",
          width:350,
          height:300,
          marginLeft:30,
          marginTop:100,
      },
      txtLL:{
          position:"absolute",
          width:300,
          height:100,
          marginLeft:30,
          marginTop:380,
          fontSize:20,
          fontWeight:"450",
          textAlign:"center",
          color:"#707172",
      },
      txt2:{
        position:"absolute",
          width:250,
          height:100,
        //   marginLeft:5,
          marginTop:450,
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
        marginTop:450,
        fontSize:20,
        fontWeight:"900",
        textAlign:"center",
        color:"#FA4238",
      },
      ketthuc:{
        position:'absolute',
        width:150,
        height:150,
        marginLeft:120,
        marginRight:28,
        marginTop:500,
      }
})
