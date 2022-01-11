import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "./config/colors";

function ListItemSeparetor() {
  return <View style={styles.separetor} />;
}
const styles = StyleSheet.create({
  separetor: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
export default ListItemSeparetor;
