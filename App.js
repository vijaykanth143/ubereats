import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Basket from "./src/screens/Basket";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen copy";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // paddingVertical: 30,
  },
});
