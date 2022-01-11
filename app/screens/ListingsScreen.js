import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../components/config/colors";

import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red jakcet for sale",
    price: 100,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in greate condition",
    price: 400,
    image: require("../assets/images/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.price + "£"}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
