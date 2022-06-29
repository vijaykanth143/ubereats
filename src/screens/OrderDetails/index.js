import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import restaurant from "../../../assets/data/restaurants.json";
import styles from "./styles";
import DishListItem from "../../components/DishlistItem";
import OrderListItem from "../../components/OrderListItem";
import BasketDishItem from "../../components/BasketDishItem";

const order = orders[0];
const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurant[0].dishes}
        renderItem={({ item }) => <BasketDishItem basketdish={item} />}
      />
    </View>
  );
};

export default OrderDetails;
