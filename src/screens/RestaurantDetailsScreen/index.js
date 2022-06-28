import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishlistItem";
import styles from "./styles";
import RestaurantHeader from "./Header";
const restaurant = restaurants[0];
const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconcontainer}
      />
    </View>
  );
};

export default RestaurantDetails;
