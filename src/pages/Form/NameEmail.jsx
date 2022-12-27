import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { sessionStorageKeys } from "../../constants/localStorage";
import { LEAD } from "../../constants/lead";
import { useGeneratorQuery } from "../../hooks/useGeneratorQuery";
import { useRgbaHook } from "../../hooks/useRgba";

const errorimg = "/assets/images/error.svg";

const EMAIL_RX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup
    .string()
    .matches(EMAIL_RX, "Email is not valid")
    .required("Email is required."),
  mobile: yup.string().required("Mobile is required"),
});

export default function NameEmail() {
  const navigate = useNavigate();
  const generatorQuery = useGeneratorQuery();
  const { storeRgbaData } = useRgbaHook()

  const removeLeadScript = () => {
    const leadInput = window.document.getElementById("leadid_token");
    if (leadInput) leadInput.remove();
    const leadNode = window.document.getElementById(LEAD.id);
    if (leadNode) leadNode.remove();
    const leadWrapper = window.document.getElementById(LEAD.wrapperId);
    if (leadWrapper) leadWrapper.remove();
  };

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
    onSubmit(values, event) {
      sessionStorage.setItem(sessionStorageKeys.firstName, values.firstName);
      sessionStorage.setItem(sessionStorageKeys.lastName, values.lastName);
      sessionStorage.setItem(sessionStorageKeys.email, values.email);
      sessionStorage.setItem(sessionStorageKeys.mobile, values.mobile);

      storeRgbaData('firstName', values.firstName)
      storeRgbaData('lastName', values.lastName)
      storeRgbaData('email', values.email)
      storeRgbaData('mobile', values.mobile)

      removeLeadScript();
      navigate(ROUTES.congrats);
    },
  });

  const fillOldValue = () => {
    const firstName = sessionStorage.getItem(sessionStorageKeys.firstName);
    const lastName = sessionStorage.getItem(sessionStorageKeys.lastName);
    const email = sessionStorage.getItem(sessionStorageKeys.email);
    const mobile = sessionStorage.getItem(sessionStorageKeys.mobile);
    if(mobile) setValues({ firstName, lastName, email, mobile });
    else setValues({ firstName, lastName, email });
  };

  const checkOldFormValues = () => {
    if (!sessionStorage.getItem(sessionStorageKeys.homeOwner))
      return navigate({
        pathname: ROUTES.homeOwner,
        search: generatorQuery.get(),
      });
  };

  useEffect(() => {
    checkOldFormValues();
    fillOldValue();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <form className="form flex-center-col" onSubmit={handleSubmit}>
      <div className="small">
        You May Be Eligible For A New US Solar Program.
      </div>

      <section className="flex-center-col">
        <div className="progress flex-spbet">
          <span className="orange bold small">100%</span>
          <span className="light-grey xxsmall">One Last Step!</span>
        </div>

        <div className="question felx-center-col">
          <div className="head media-font-20 orange medium bold">
            See Your Free Quotes Now!
          </div>

          <div className="add-state media-flex-center-col">
            <input
              required
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="firstName"
              placeholder="First Name"
              className="light-grey width-100 small state"
            />
            <input
              required
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="light-grey width-100 small state"
            />
          </div>
          <div className="add-state media-flex-center-col">
            <div className="form-error font-12 form-error-2">
              {errors.firstName && touched.firstName ? (
                <>
                  <img src={errorimg} alt="" /> &nbsp;&nbsp; {errors.firstName}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="form-error font-12 form-error-2">
              {errors.lastName && touched.lastName ? (
                <>
                  <img src={errorimg} alt="" /> &nbsp;&nbsp; {errors.lastName}
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            onBlur={handleBlur}
            name="email"
            placeholder="Email Address"
            className="address small"
            required
          />
          <div className="form-error font-12 form-error-2">
            {errors.email && touched.email ? (
              <>
                <img src={errorimg} alt="" /> &nbsp;&nbsp; {errors.email}
              </>
            ) : (
              ""
            )}
          </div>
          <PhoneInput
            country={"us"}
            onlyCountries={["us"]}
            value={values.mobile}
            name="mobile"
            inputProps={{
              name: "mobile",
              onBlur: handleBlur,
              onChange: handleChange,
            }}
            containerStyle={{
              width: "100%",
              height: "64px",
              margin: "10px 0px",
              borderRadius: "10px",
            }}
            inputStyle={{ width: "100%", height: "64px", fontSize: "16px" }}
          />

          <div className="form-error font-12 form-error-2 mb-2">
            {errors.mobile && touched.mobile ? (
              <>
                <img src={errorimg} alt="" /> &nbsp;&nbsp; {errors.mobile}
              </>
            ) : (
              ""
            )}
          </div>

          <div className="xxsmall light-grey">
            By clicking Get My Free Quote, I agree to the{" "}
            <span className="bold">Terms of Service</span> and{" "}
            <span className="bold">Privacy Policy</span> and authorize up to 4{" "}
            <span className="bold">solar energy companies</span>, their
            contractors and partners to contact me with offers about solar
            product or service by telephone calls, emails, artificial voice, and
            pre-recorded/text messages, using an automated telephone technology,
            to the number and email I provided above, even if my number is a
            mobile number or is currently listed on any state, federal or
            corporate Do Not Call list. I understand that my consent here is not
            a condition of purchase of any goods or services. Message and data
            rates may apply. <span className="bold">California Notice.</span>
          </div>

          <button
            disabled={
              errors.firstName ||
              errors.lastName ||
              errors.mobile ||
              errors.email
            }
            onClick={handleSubmit}
            type="submit"
            role={"button"}
            className="submit-data medium"
          >
            Get my Free Quote
          </button>
        </div>
      </section>
    </form>
  );
}
