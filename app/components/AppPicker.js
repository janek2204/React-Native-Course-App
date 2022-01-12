import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "./config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import Card from "./Card";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  placeholder,
  selectedCategory,
  onSelectedCategory,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalOpen(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            color={defaultStyles.colors.medium}
            size={20}
            style={styles.icon}
          />
          <AppText style={styles.text}>
            {selectedCategory ? selectedCategory.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            color={defaultStyles.colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalOpen} animationType="slide">
        <Screen>
          <Button onPress={() => setModalOpen(false)} title="Close" />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalOpen(false);
                  onSelectedCategory(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  icon: { marginRight: 10 },
  text: {
    flex: 1,
  },
});
export default AppPicker;
