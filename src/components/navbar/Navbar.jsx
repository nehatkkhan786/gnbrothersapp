import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Navbar = ({leftIcon, rightIcon, title, paddingHorizontal}) => {
  return (
    <View style={{width:'100%', paddingVertical:5, flexDirection:'row', alignItems:"center", justifyContent:"space-between", paddingHorizontal:paddingHorizontal}}>
      {!leftIcon &&(
        <Text></Text>
      )}
      <TouchableOpacity>
        {leftIcon}
      </TouchableOpacity>
        <Text style={{fontWeight:'bold', fontSize:20, textTransform:'uppercase' , color:'#555' }}>{title}</Text>
      {rightIcon}
    </View>
  )
}

export default Navbar

