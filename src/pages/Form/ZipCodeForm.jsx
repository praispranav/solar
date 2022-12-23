import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDataLayer } from "../../hooks/useDataLayer";
import axios from "axios";
import { useRgbaHook } from "../../hooks/useRgba";
import { sessionStorageKeys } from "../../constants/localStorage";

const initialValues = {
  zip: "",
};

const validationSchema = yup.object({
  zip: yup
    .string()
    .required("Zip Code is Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Zip code should be of 5 digit.")
    .max(5, "Zip code should be of 5 digit."),
});

export default function ZipCodeForm() {
  const dataLayer = useDataLayer();
  const [loading, setLoading] = useState();
  const { storeRgbaData } = useRgbaHook();

  const {
    handleSubmit,
    touched,
    setErrors,
    errors,
    setValues,
    values,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, event) => {
      if (!loading) {
        const JornayaToken = document.getElementById("leadid_token").value;
        sessionStorage.setItem(sessionStorageKeys.zip, String(values.zip));
        incZipFormState(values.zip);
        storeRgbaData("zip", values.zip);

        storeRgbaData("lead_id", JornayaToken);
        storeRgbaData("user_agent", window.navigator.userAgent);

        dataLayer.set("state", response.state);
        dataLayer.set("city", response.city);
      }
    },
  });

  return (
    <form className="form flex-center-col" onSubmit={handleSubmit}>
      <div className="small">
        You May Be Eligible For A New US Solar Program.
      </div>
    </form>
  );
}
