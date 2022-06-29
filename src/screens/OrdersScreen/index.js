import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import OrderListItem from "../../components/OrderListItem";
const OrderScreen = () => {
  console.log(orders);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem orderList={item} />}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
