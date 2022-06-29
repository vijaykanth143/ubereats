import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BasketDishItem = ({ basketdish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketdish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {basketdish.price}</Text>
    </View>
  );
};
export default BasketDishItem;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 10,
  },

  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});
