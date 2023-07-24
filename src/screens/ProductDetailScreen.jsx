import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/navbar/Navbar'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductCardImages from '../components/products/ProductCardImages';

const ProductDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {productitle} = route.params
  return (
    <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:'flex-start',  backgroundColor:'#EBEAEF',}}>
    <Navbar paddingHorizontal={15} leftIcon={<Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />} title='G N Brothers' rightIcon={<Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.disneyplusinformer.com%2Fwp-content%2Fuploads%2F2021%2F06%2FLuca-Profile-Avatars-3-600x600.png&f=1&nofb=1&ipt=29eee685dc31d9b8700024469b3307c4bed90b624d5b4400b69227dc8c6e9158&ipo=images'}} style={{width:40, height:40, paddingHorizontal:15}}/>}/>
    <ScrollView style={{width:'100%'}}>
        <ProductCardImages/>
    </ScrollView>
    
 </SafeAreaView>
  )
}

export default ProductDetailScreen