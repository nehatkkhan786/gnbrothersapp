import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/navbar/Navbar'
import SearchBox from '../components/search/SearchBox';
import Categories from '../components/categories/Categories';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { BASE_URL } from '../constant';
const HomeScreen = () => {
  

  const {data, isLoading, error, refetch} =  useQuery({
      queryKey:['categories'], 
      queryFn : async ()=> await axios.get(`${BASE_URL}categories/`)
  })
  
  return (
    <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:'flex-start',  backgroundColor:'#EBEAEF', paddingHorizontal:20 }}>
       <Navbar  title='G N Brothers' rightIcon={<Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.disneyplusinformer.com%2Fwp-content%2Fuploads%2F2021%2F06%2FLuca-Profile-Avatars-3-600x600.png&f=1&nofb=1&ipt=29eee685dc31d9b8700024469b3307c4bed90b624d5b4400b69227dc8c6e9158&ipo=images'}} style={{width:40, height:40}}/>}/>
       <SearchBox/>
       {isLoading && <ActivityIndicator size='large' color="#0000ff"/>}
       {data && <Categories data={data} isLoading={isLoading}/>}

       {error && (
        <View style={{ flex:1, justifyContent:'center', alignItems:"center",}}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>Opps!Something Went Wrong</Text>
          <TouchableOpacity onPress={refetch} style={{padding:10, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'#fff'}}>Try Again</Text>
          </TouchableOpacity>
        </View>
       )}
      
    </SafeAreaView>
  )
}

export default HomeScreen

