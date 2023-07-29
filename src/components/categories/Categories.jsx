import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useQueryClient } from "@tanstack/react-query";


const Categories = ({ data, isLoading }) => {
  const  queryClient = useQueryClient()
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, width: "100%", marginTop: 5 }}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={()=>queryClient.invalidateQueries(['categories'])}/>}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {data?.data?.map((cat) => {
          return (
            <CategoryCard
              key={cat?.id}
              id={cat?.id}
              catTitle={cat?.categoryTitle}
              imgurl={cat?.categoryImage}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
