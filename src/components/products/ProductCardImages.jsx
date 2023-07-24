import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ProductImages } from '../../data/ProductData'
import { Octicons } from '@expo/vector-icons';

const ProductCardImages = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const width = Dimensions.get('window').width
    console.log(selectedImage)
  return (
   
    <FlatList
    horizontal
    pagingEnabled
    data = {ProductImages}
    style={{backgroundColor:'white'}}
    showsHorizontalScrollIndicator={false}
    onScroll={(e)=>{setSelectedImage(e.nativeEvent.contentOffset.x/width.toFixed())}}
    renderItem={({item, index})=>{
        return (
            
           <>
                <Image source={{uri:item.imgUrl}} style={{width:width,resizeMode:'contain', aspectRatio:1, }}/>

                {ProductImages?.map((item, index)=>{
                   return (
                   
                        <Octicons name="dot-fill" size={30} color={selectedImage == item.id ? 'black' : 'white'} style={{position:'absolute', bottom:10}} />
                    
                   )
                })}
             </>   
         
        )
    }}
    />
    
  )
}

export default ProductCardImages

const styles = StyleSheet.create({})