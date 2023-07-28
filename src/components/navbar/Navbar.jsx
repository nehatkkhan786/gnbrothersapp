import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import logoImage from '../../asset/logo.png'
const Navbar = ({leftIcon, rightIcon, title, paddingHorizontal}) => {
  return (
    <View style={{width:'100%', paddingVertical:5, flexDirection:'row', alignItems:"center", justifyContent:"space-between", paddingHorizontal:paddingHorizontal}}>
      {!leftIcon &&(
        <Text></Text>
      )}
      <TouchableOpacity>
        {leftIcon}
      </TouchableOpacity>
        {/* <Text style={{fontWeight:'bold', fontSize:20, textTransform:'uppercase' , color:'#555' }}>{title}</Text> */}
        <View>
          <Image source={logoImage}  style={{width:150, height:50,  contentFit:'cover'}}/>
        </View>
      {rightIcon}
    </View>
  )
}

export default Navbar
// gnbrothersshop/src/asset/logo.png
