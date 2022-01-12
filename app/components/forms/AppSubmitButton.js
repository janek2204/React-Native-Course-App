import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function AppSubmitButton({ title, buttonColor }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} buttonColor={buttonColor} onPress={handleSubmit} />
  );
}

export default AppSubmitButton;
