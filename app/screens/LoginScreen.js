import { Formik } from "formik";
import React from "react";
import { StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../components/config/colors";
import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppButton
              title="Login"
              buttonColor={colors.secondary}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
