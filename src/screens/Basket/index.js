import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];
const Basket = ({ basketdish }) => {
  const [quantity, setQuantity] = useState(1);
  const BasketDishItem = () => {
    return (
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
        <Text style={{ fontWeight: "600" }}>{basketdish.name}</Text>
        <Text style={{ marginLeft: "auto" }}>${basketdish.price}</Text>
      </View>
    );
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>Your items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketdish={item} />}
      />
      <View style={styles.seperator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingVertical: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 20,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default Basket;
