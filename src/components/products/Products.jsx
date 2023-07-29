import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../constant";

const Products = ({ catId }) => {
  const route = useRoute();
  const { category } = route.params;
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await axios.get(`${BASE_URL}products/${Number(catId)}/`),
  });
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
        }}
      >
        {isLoading && <ActivityIndicator size="large" />}

        {data?.data?.results?.length > 0 ? (
          <FlatList
            data={data?.data?.results}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  key={data?.data?.results.id}
                  productImageUrl={item?.productImages[0]?.image}
                  productTitle={item?.title}
                  productPrice={item?.price}
                />
              );
            }}
            ListFooterComponent={()=><View style={{paddingBottom:150}}/>}
          />
        ) : (
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Ooops..No Item Found
          </Text>
        )}
        {error && <Text>Something went Wrong</Text>}
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
