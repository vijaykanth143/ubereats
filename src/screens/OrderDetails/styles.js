import { StyleSheet } from "react-native";
export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 15,
    color: "#525252",
  },
  container: {
    margin: 10,
  },
  iconcontainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});
