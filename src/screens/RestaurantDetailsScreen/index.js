import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Restaurant } from "../../models";
import { Dish } from "../../models";
import DishListItem from "../../components/DishlistItem";
import styles from "./styles";
import RestaurantHeader from "./Header";
import { DataStore } from "aws-amplify";

const RestaurantDetails = ({ route, navigation }) => {
  const id = route.params?.id;
  const [restaurant, setRestaurant] = useState(null);
  const [Dishes, setDishes] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    DataStore.query(Restaurant, id).then(setRestaurant);
    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
      setDishes
    );
  }, [id]);

  if (!restaurant) {
    return (
      <ActivityIndicator
        size={"large"}
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      />
    );
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={Dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconcontainer}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetails;
