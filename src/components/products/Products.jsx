import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import ProductCard from './ProductCard'

const Products = () => {
    const route = useRoute()
    const {category} = route.params
  return (
    <ScrollView style={{marginTop:10}} showsVerticalScrollIndicator={false}>
        <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        //   justifyContent: "center",
          gap:2
        }}
      >
        <ProductCard productImageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia6.ppl-media.com%2Ftr%3Ah-750%2Cw-750%2Cc-at_max%2Fstatic%2Fimg%2Fproduct%2F124924%2Flakme-eyeconic-kajal-black-0-35-g1_8_display_1581144981_521e12b3.jpg&f=1&nofb=1&ipt=9ce93c15b376deb487ccb0bd8dcfeef656050f587cca5db9b064e70d8cd89671&ipo=images' productTitle='Lakme Eyekonic Kajal' productPrice='185'/>
        <ProductCard productImageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia6.ppl-media.com%2Ftr%3Ah-750%2Cw-750%2Cc-at_max%2Fstatic%2Fimg%2Fproduct%2F124924%2Flakme-eyeconic-kajal-black-0-35-g1_8_display_1581144981_521e12b3.jpg&f=1&nofb=1&ipt=9ce93c15b376deb487ccb0bd8dcfeef656050f587cca5db9b064e70d8cd89671&ipo=images' productTitle='Lakme Eyekonic Kajal' productPrice='295'/>
        <ProductCard productImageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia6.ppl-media.com%2Ftr%3Ah-750%2Cw-750%2Cc-at_max%2Fstatic%2Fimg%2Fproduct%2F124924%2Flakme-eyeconic-kajal-black-0-35-g1_8_display_1581144981_521e12b3.jpg&f=1&nofb=1&ipt=9ce93c15b376deb487ccb0bd8dcfeef656050f587cca5db9b064e70d8cd89671&ipo=images' productTitle='Lakme Eyekonic Kajal' productPrice='185'/>
      </View>
   </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({})