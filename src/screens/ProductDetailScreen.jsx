import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/navbar/Navbar'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductCardImages from '../components/products/ProductCardImages';
import { AntDesign } from '@expo/vector-icons';

const ProductDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {productitle} = route.params
  return (
    <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:'flex-start',  backgroundColor:'#EBEAEF',}}>
    <Navbar paddingHorizontal={15} leftIcon={<Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />} title='G N Brothers' rightIcon={<Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.disneyplusinformer.com%2Fwp-content%2Fuploads%2F2021%2F06%2FLuca-Profile-Avatars-3-600x600.png&f=1&nofb=1&ipt=29eee685dc31d9b8700024469b3307c4bed90b624d5b4400b69227dc8c6e9158&ipo=images'}} style={{width:40, height:40, paddingHorizontal:15}}/>}/>
    <ScrollView style={{width:'100%'}}>
        <ProductCardImages/>
        <View style={{paddingHorizontal:15, gap:8, marginTop:10}}>
          <Text style={{fontSize:18, fontWeight:500, textTransform:'uppercase'}}>Lakmee Eyekonic</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', gap:10}}>
              <Text style={{fontSize:20,}}>{'\u20B9'}185</Text>
              <Text style={{fontSize:20, color:'gray', textDecorationLine:'line-through'}}>{'\u20B9'}195</Text>
            </View>
            <TouchableOpacity style={{padding:10, backgroundColor:'black',justifyContent:'center', flexDirection:'row',  alignItems:'center', borderRadius:17, gap:10}}>
                <Text style={{color:'white', textTransform:'uppercase'}}>Add to Cart</Text>
                <AntDesign name="shoppingcart" size={20} color="#FBFBFB" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', gap:10, marginTop:10}}>
            <Text style={{fontSize:20,}}>Size</Text>
            <Text style={{fontSize:20, color:'gray',}}>5 ml</Text>
          </View>

          <View style={{ gap:6, marginTop:10}}>
            <Text style={{fontSize:20,}}>Product Details</Text>
            <Text style={{fontSize:20, color:'gray', textAlign:'auto'}}>Make an Eyeconic statement with the all-new Lakmé Eyeconic Kajal and experience the power of beautiful eyes! A smudge-proof as well as waterproof kajal for everyday use, the new Lakmé Eyeconic Kajal promises to last up to 22 hours. Say goodbye to touch-ups and a big hello to long-lasting finesse to your eyes, all through the day!</Text>
          </View>

        </View>
    </ScrollView>
    
 </SafeAreaView>
  )
}

export default ProductDetailScreen