import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="#7F7F7F" />
        <TextInput placeholder='Search Products' style={styles.searchinput}/>
      </View>
      <TouchableOpacity style={{ backgroundColor:'#fff',  width:50, height:50 , borderRadius:25, alignItems:"center", justifyContent:'center',}}>
        <AntDesign name="filter" size={28} color="#7F7F7F" style={{alignSelf:'center'}}/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    searchWrapper:{
       flexDirection:'row',
       paddingVertical:5, 
       alignItems:"center", 
       width:'100%', 
       gap:10, 
       marginTop:10
    }, 
    searchContainer:{
        backgroundColor:'#fff', 
        flex:1,
        flexDirection:'row',
        gap:10,
        paddingHorizontal:10, 
        paddingVertical:5, 
        borderRadius:20, 
        alignItems:"center", 
        
    }, 
    searchinput:{
        paddingVertical:10, 
        fontWeight:'bold', 
        fontSize:18, 
        color:"#555", 
        flex:1
    }
})

export default SearchBox

