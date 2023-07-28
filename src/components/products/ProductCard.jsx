import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


const ProductCard = ({productTitle, productImageUrl, productPrice}) => {
    const screenWidth  = Math.floor(Dimensions.get('window').width) 
    const cardWidth = screenWidth / 2 -20
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetail", {"productitle":productTitle})} style={{width:cardWidth, alignItems:'center', justifyContent:'center', margin:2, borderRadius:20, backgroundColor:'white', padding:4}}>
     <Image source={{uri:productImageUrl}} style={{width:'100%', height:230, resizeMode:'contain', borderRadius:20}}/>
     
    <View  style={[styles.customBg, {alignItems:'flex-start', justifyContent:'flex-start', width:'100%', paddingHorizontal:10, paddingVertical:5,}]}>
        <Text style={{fontSize:18,fontWeight:500, color:'#555'}}>{productTitle}</Text>
        
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%',}}>
            <Text style={{fontSize:16, fontWeight:500, color:'#555'}}>Rs {productPrice}</Text>
            <TouchableOpacity style={{backgroundColor:'#000000', width:35, height:35, justifyContent:'center', alignItems:'center', borderRadius:17}}>
                <AntDesign name="shoppingcart" size={20} color="#FBFBFB" />
            </TouchableOpacity>
        </View>
    </View>

    </TouchableOpacity>
    
  )
}

export default ProductCard

const styles = StyleSheet.create({
    customBg:{
        backgroundColor:'transparent'
    }
})