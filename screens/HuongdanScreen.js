import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import back from '../assets/images/back.png'
import locxoay from '../assets/images/kihieu.png'
import khung1 from '../assets/images/khung1.png'
import khung2 from '../assets/images/khung2.png'
import khung3 from '../assets/images/khung3.png'
import huongdan from '../assets/images/huongdan.png'
import xacnhan from '../assets/images/xacnhan.png'
export default class guideScreen extends Component {
  render() {
    const {navigation} =  this.props;
    return (
      <View style = {styles.bck}>
         <Image style={styles.logo} source= {logo} />
         <Text style={styles.txt1}>HƯỚNG DẪN THAM GIA</Text>
         <Image style={styles.xacnhan} source= {xacnhan} />
         <View style={styles.container}>
              <Image style={styles.kihieu} source={kihieu}/>
              <Image style={styles.back} source={back}/>
              <Text style={styles.txtTram}>TRẠM</Text>
              <Image style={styles.locxoay} source= {locxoay} /> 
              <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
              <Text style={styles.txtCua}>của AQUAFINA</Text>
              <Image style={styles.container1} source= {khung1} /> 
              <Image style={styles.container2} source= {khung2} />
              <Image style={styles.container3} source= {khung3} />
              <Image style={styles.huongdan} source= {huongdan} />
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
  fontSize:30,
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
}, kihieu:{
  position:"absolute",
  width:380,
  height:500,
  Color:"#EAF0F8",
  
},
back:{
  position:"absolute",
  width:40,
  height:40,
  marginLeft:20,
  marginTop:10,
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
container1:{
  position:"absolute",
  width:"97%",
  height:100,
  marginLeft:5,
  marginTop:85,
 
},
container2:{
  position:"absolute",
  width:"97%",
  height:100,
  marginLeft:5,
  marginTop:200,
 
},
container3:{
  position:"absolute",
  width:"97%",
  height:100,
  marginLeft:5,
  marginTop:315,
 
},
huongdan:{
  position:"absolute",
  width:350,
  height:40,
  marginLeft:20,
  marginTop:430,
},
xacnhan:{
  position:'absolute',
        width:150,
        height:150,
        marginLeft:120,
        marginRight:28,
        marginTop:630,
}
})
