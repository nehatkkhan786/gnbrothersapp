import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/navbar/Navbar'
import SearchBox from '../components/search/SearchBox'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import Products from '../components/products/Products'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from '../constant'
import { AntDesign } from '@expo/vector-icons';



const ProductsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {catId} = route.params
    

   
  return (
    <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:'flex-start',  backgroundColor:'#EBEAEF', paddingHorizontal:15 }}>

       <Navbar leftIcon={<Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />} title='G N Brothers' rightIcon={<Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.disneyplusinformer.com%2Fwp-content%2Fuploads%2F2021%2F06%2FLuca-Profile-Avatars-3-600x600.png&f=1&nofb=1&ipt=29eee685dc31d9b8700024469b3307c4bed90b624d5b4400b69227dc8c6e9158&ipo=images'}} style={{width:40, height:40}}/>}/>

       <SearchBox
            filterComp={<TouchableOpacity style={{ backgroundColor:'#fff',  width:50, height:50 , borderRadius:25, alignItems:"center", justifyContent:'center',}}>
              <AntDesign name="filter" size={28} color="#7F7F7F" style={{alignSelf:'center'}}/>
            </TouchableOpacity>}
        />

       <Products catId={catId} />
    </SafeAreaView>
  )
}

export default ProductsScreen

