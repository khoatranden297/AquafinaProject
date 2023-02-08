import React, { Component, useEffect, useState, useRef } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import locxoay from '../assets/images/kihieu.png'
import locxoay1 from '../assets/images/kihieu.png'


 const Hetthoigian =({navigation})=> {
      const [countdown, setCountdown] = useState(10)
  const timeId = useRef()
  useEffect(()=>{
     timeId.current = setInterval(()=>{
      setCountdown(prevState => prevState-1)
    },1000)
    
  },[])
  useEffect(()=>{
    if(countdown<=0){
      clearInterval(timeId.current)
      navigation.navigate('Home')
      console.log('hetthoigian')  
    }
  },[countdown])
    return (
      <View>
      
        <View style={styles.modalView}>
          <Image style={styles.kihieuModal} source={kihieu} />
          <Text style={styles.txtTram1}>TRẠM</Text>
          <Image style={styles.locxoay1} source={locxoay1} />
          <Text style={styles.txtTaiSinh1}>TÁI SINH</Text>
          <Text style={styles.txtCua1}>của AQUAFINA</Text>
          <Text style={styles.txtE}>CẢNH BÁO HẾT THỜI GIAN</Text>
          <Text style={styles.txtS}>Thời gian thực hiện quy trình đã kết thúc, bạn có cần thêm thời gian không?</Text>
          <Text style={styles.txtBack}>Trở về màn hình chính sau:</Text>
          <Text style={styles.txtTime}>{countdown} giây nữa </Text>
       
        </View>
        
     
      <Pressable style={styles.btnHome} 
      onPress={()=>{
        clearInterval(timeId.current)
        navigation.navigate('Home')
        console.log('oke')
      }}
      >
            <Text style={styles.txtBtn}> Màn hình chính </Text>
          </Pressable>
          <Pressable style={styles.btnThem} 
           onPress={()=>{
            // clearInterval(timeId.current)
            navigation.navigate('Quetma')
           
            console.log('oke')
          }}
          >
            <Text style={styles.txtBtn1}>THÊM THỜI GIAN </Text>
          </Pressable>
    
      </View>
    )
  }

export default Hetthoigian
const styles = StyleSheet.create({
    centeredView: {
       
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      },
      modalView: {
        position: "absolute",
        width: 380,
        height: 350,
        marginLeft: 15,
        marginTop: 150,
        backgroundColor: "#FFFFFF",
        borderRadius: 40,
        
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 2,
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
        width: 250,
        height: 150,
        position: "absolute",
        marginTop: 20,
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "700",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        textAlign: 'center',
        color: "#1545A5"
      },
      kihieuModal: {
        position: "absolute",
        width: 370,
        height: 350,
        marginLeft: 1,
    
    
      },
     
     
      
      txtTram1: {
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
      txtTaiSinh1: {
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
      txtCua1: {
        position: "absolute",
        width: 100,
        height: 100,
        marginLeft: 270,
        marginTop: 60,
        fontSize: 13,
        fontWeight: "450",
        textAlign: "center",
        color: "#1545A5"
      },
      locxoay1: {
        position: 'absolute',
        width: 100,
        height: 20,
        paddingRight:115,
        marginTop: 15,
    
      },
      txtE:{
        fontStyle:"normal",
        fontWeight:"700", 
        fontSize:25,
        marginTop:75,
        textAlign:"center",
        color:"#1545A5",
      },
      txtS:{
        
        position:"absolute",
        width:380,
        height:70,
        fontStyle:"normal",
        fontWeight:"400", 
        fontSize:22,
        marginTop:120,
        
        textAlign:"center",
        color:"#707172",
      },
      txtBack:{
        position:"absolute",
        width:500,
        height:80,
        fontStyle:"normal",
        fontWeight:"400", 
        fontSize:20,
        paddingRight:130,
        marginTop:200,
        textAlign:"center",
        color:"#707172",
      },
     txtTime:{
       position: "absolute",
        width: 370,
        height: 100,
        paddingLeft:220,
        marginTop: 200,
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        color: "#FA4238",
    },
    btnHome:{
      width:180,
      height:50,
      position:"absolute",
      marginTop:430,
      marginLeft:20,
      backgroundColor:"#DADADA",
      borderRadius:15,
      boxShadow: "0px 0px 17.8665px #C3CEDF",
      shadowColor: "rgba(155, 192, 255, 0.77)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 3,
      shadowRadius: 3.84,
    
      elevation: 5,
    },
    txtBtn:{
      position: "absolute",
        width: 370,
        height: 100,
        paddingRight:185,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        color: "#336CC8",
        
    },btnThem:{
      width:180,
      height:50,
      position:"absolute",
      marginTop:430,
      marginLeft:210,
      backgroundColor:"#1545A5",
      borderRadius:15,
      boxShadow: "0px 0px 17.8665px #C3CEDF",
      shadowColor: "rgba(155, 192, 255, 0.77)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 3,
      shadowRadius: 3.84,
    
      elevation: 5,
    },
    txtBtn1:{
      position: "absolute",
        width: 370,
        height: 100,
        paddingRight:190,
        marginTop: 12,
        fontSize: 18,
        fontWeight: "900",
        textAlign: "center",
        color: "#FFFFFF",
    },
})
