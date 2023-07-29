import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({catTitle, imgurl, id}) => {
    const screenWidth  = Math.floor(Dimensions.get('window').width) 
    const cardWidth = screenWidth / 2 -30
    const navigation = useNavigation()
  return (
    <>
    <TouchableOpacity onPress={()=>navigation.navigate('Products',{'catId':id})} style={{flexDirection:'row', width:cardWidth, alignItems:'center', justifyContent:'center', margin:4, borderRadius:20, position:'relative',}}>
     <Image source={{uri:imgurl}} style={{width:'100%', height:230, resizeMode:'cover', borderRadius:20}}/>
     <View style={{position:'absolute', borderBottomEndRadius:10, borderBottomStartRadius:10,  paddingVertical:10,  bottom:0, width:'100%', alignItems:'center', backgroundColor:'black', opacity:0.8, }}>
        <Text style={{color:'#fff', fontSize:16, fontWeight:'bold', textTransform:'uppercase'}}>{catTitle}</Text>
    </View>
    </TouchableOpacity>
    
    </>
  )
}

export default CategoryCard

const styles = StyleSheet.create({}) 