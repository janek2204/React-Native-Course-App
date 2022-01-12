import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Car", value: 2 },
  { label: "Home", value: 3 },
];

function ListingEditingScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      ></AppForm>
    </Screen>
  );
}

export default ListingEditingScreen;
