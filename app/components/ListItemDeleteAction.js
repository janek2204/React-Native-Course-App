import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "./config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
