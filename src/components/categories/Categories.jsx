import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: "100%", marginTop:5 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap:2
        }}
      >
        <CategoryCard catTitle='Facewash' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/2ef5fdd3-6ab2-4361-9440-050a90441c01/DreamShaper_v7_generate_a_real_image_of_facewash_for_a_product_1.jpg' />
        <CategoryCard catTitle='Oil' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/2d63b614-39f2-42de-92be-e10b80592d51/DreamShaper_v7_generate_a_real_image_of_hair_oil_for_a_product_0.jpg'/>
        <CategoryCard catTitle='Serum' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/711022ce-209a-48db-bd3a-69c45a5ad264/DreamShaper_v7_generate_a_real_image_of_hair_and_face_serum_fo_0.jpg?w=512'/>
        <CategoryCard catTitle='Makeup' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/b59cf161-4a42-411f-97bb-d2df93b21aee/DreamShaper_v7_generate_a_real_image_of_makeup_for_a_product_c_3.jpg?w=512'/>
        <CategoryCard catTitle='Hair Care' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/ef4dae28-a26b-4c85-998c-1e03c390f5f7/DreamShaper_v7_generate_a_real_image_of_hair_care_products_fo_0.jpg?w=512'/>
        <CategoryCard catTitle='Body Care' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/6509ead9-ef82-4d3c-b6c5-0d5113397653/DreamShaper_v7_generate_a_real_image_of_Body_Care_products_fo_0.jpg?w=512'/>
        <CategoryCard catTitle='Face Care' imgurl='https://cdn.leonardo.ai/users/c37c81b4-3e6c-47f2-a2cf-ac00d34edd25/generations/0a49bbe0-db5c-4d10-9cfb-767addc12608/DreamShaper_v7_generate_a_real_image_of_Face_Care_products_fo_3.jpg'/>
        
        
      
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
