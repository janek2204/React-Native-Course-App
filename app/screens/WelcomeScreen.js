import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../components/config/colors";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/images/background.jpg")}
      style={styles.backround}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-red.png")}
        />
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" buttonColor={colors.primary} />
        <AppButton title="Register" buttonColor={colors.secondary} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backround: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
