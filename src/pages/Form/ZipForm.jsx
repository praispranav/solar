import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { sessionStorageKeys } from "../../constants/localStorage";
import { ROUTES } from "../../constants/routes";
import { YES_NO } from "../../constants/yesNo";
import { useGeneratorQuery } from "../../hooks/useGeneratorQuery";
import { useRgbaHook } from "../../hooks/useRgba";
import { useDataLayer } from "../../hooks/useDataLayer";
import * as yup from "yup";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { REDIRECT_AND_STORAGE_KEYS } from "../../constants/queryStrings";
import { localStorageKeys } from "../../constants/localStorage";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./index.scss";

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

export default function ZipForm() {
  const navigate = useNavigate();
  const generatorQuery = useGeneratorQuery();
  const { storeRgbaData } = useRgbaHook();
  const dataLayer = useDataLayer();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [search] = useSearchParams();
  const fbc = Cookies.get("_fbc") || "";
  const fbp = Cookies.get("_fbp") || "";

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
        onSubmit(values.zip);
        storeRgbaData("zip", values.zip);

        storeRgbaData("lead_id", JornayaToken);
        storeRgbaData("user_agent", window.navigator.userAgent);

        dataLayer.set("state", response.state);
        dataLayer.set("city", response.city);
      }
    },
  });

  const checkCurrentFormValue = () =>{
    const zipCodeValue = sessionStorage.getItem(sessionStorageKeys.zip)
    if(zipCodeValue) setValues({ zip: zipCodeValue })
  }

  const onSubmit = (zip) => {
    const JornayaToken = document.getElementById("leadid_token").value;
    setLoading(true);
    setResponse({ city: "", state: "" });
    sessionStorage.setItem(
      sessionStorageKeys.zipCodeExtraValues,
      JSON.stringify({
        user_agent: navigator.userAgent,
        fbc: "",
        fbp: "",
        city: "",
        state: "",
        JornayaToken: JornayaToken,
      })
    );
    axios
      .get("https://api.zippopotam.us/us/" + zip, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      })
      .then((response) => {
        const obj = response.data;
        const keys = Object.keys(obj);
        dataLayer.set("zip", zip);
        if (keys.length === 0) return setErrors({ zip: "Zip Code not valid" });
        setResponse({
          city: response.data["places"][0]["place name"],
          state: response.data["places"][0]["state abbreviation"],
        });
        storeRgbaData("city", response.data["places"][0]["place name"]);
        storeRgbaData(
          "state",
          response.data["places"][0]["state abbreviation"]
        );
        sessionStorage.setItem(
          sessionStorageKeys.zipCodeExtraValues,
          JSON.stringify({
            user_agent: navigator.userAgent,
            fbc: fbc,
            fbp: fbp,
            city: response.data["places"][0]["place name"],
            state: response.data["places"][0]["state abbreviation"],
            JornayaToken: JornayaToken,
          })
        );
        navigate({
          pathname: ROUTES.monthlyElectricBill,
          search: generatorQuery.get(),
        });
        setLoading(false);
      })
      .catch((error) => {
        setErrors({ zip: "Zip Code not valid" });
        setLoading(false);
        console.error(error);
      });
  };

  const storeInitialData = (userIp) => {
    const redirectQueries = {
      userIp,
    };

    REDIRECT_AND_STORAGE_KEYS.forEach((obj) => {
      redirectQueries[obj.storageKey] = search.get(obj.redirectString) || "";
      storeRgbaData(obj.ringbaKey, search.get(obj.redirectString));
    });
    storeRgbaData("userIp", userIp);

    sessionStorage.setItem(
      sessionStorageKeys.utm_fbclid,
      JSON.stringify(redirectQueries)
    );

    for (const entry of search.entries()) {
      generatorQuery.set(entry[0], entry[1]);
    }

    storeRgbaData(
      "visitor_id",
      localStorage.getItem(localStorageKeys.visitorId)
    );
  };

  const getIpAdd = async () => {
    let userIp;
    try {
      var response;
      response = await axios.get(
        "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      userIp = response.data["IPv4"];
    } catch (error) {
      console.error(error);
    }
    storeInitialData(userIp);
  };

  useEffect(() => {
    getIpAdd();
    checkCurrentFormValue();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onChangeZipValue = (e) => {
    const value = e.target.value;
    const obj = {
      target: {
        name: "zip",
        value: String(value).slice(0, 5),
      },
    };
    dataLayer.set("zip", value);
    handleChange(obj);
  };

  return (
    <div className="form flex-center-col">
      <div className="small">
        You May Be Eligible For A New US Solar Program.
      </div>

      <section className="flex-center-col">
        <div className="progress flex-spbet">
          <span className="orange bold small">10%</span>
          <span className="light-grey xxsmall">It will finish shortly..</span>
        </div>

        <div className="question felx-center-col">
          <div className="head media-font-20 orange medium bold">
            What's your Zip Code?
          </div>
          <div className="add-state media-flex-center-col">
            <input
              required
              value={values.zip}
              onChange={onChangeZipValue}
              onBlur={handleBlur}
              maxLength={5}
              max={99999}
              type="number"
              name="zip"
              placeholder="Zip Code"
              className="address"
            />
          </div>
          <button
            disabled={
              errors.zip
            }
            onClick={handleSubmit}
            type="submit"
            role={"button"}
            className="submit-data medium"
          > {loading ? (
            <>
              <PropagateLoader
                color="#edd185"
                className="margin-loader"
              />
              <p className="visibility-hidden">.</p>{" "}
            </>
          ) : (
            <>Continue</>
          )}
          </button>
        </div>
      </section>
    </div>
  );
}
