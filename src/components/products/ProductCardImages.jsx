import {
  Dimensions,
  FlatList,
 
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { ProductImages } from "../../data/ProductData";
import { Octicons } from "@expo/vector-icons";
import { Image } from 'expo-image'

const ProductCardImages = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const width = Dimensions.get("window").width;
  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        data={ProductImages}
        style={{ }}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onScroll={(e) => {
          setSelectedImage(e.nativeEvent.contentOffset.x / width.toFixed());
        }}
        renderItem={({ item, index }) => {
          return (
            <>
            <View style={{  width: width, height:300, }}>

              <Image
                source={{ uri: item.imgUrl }}
                style={{width:'100%', height:'100%', resizeMode:'contain'  }}
                />
            </View>
            </>
          );
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {ProductImages?.map((i, index) => {
          return (
            <Octicons name="dot-fill" size={16} color={selectedImage === index ? 'gray' : 'white'}/>
          )
        })}
      </View>
    </>
  );
};

export default ProductCardImages;

const styles = StyleSheet.create({});
