import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { sessionStorageKeys } from "../../constants/localStorage";
import { LEAD } from "../../constants/lead";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup.string().required("Email is required.").email("Invalid Email."),
  mobile: yup.string().required("Mobile is required"),
});

export default function NameEmail() {
  const navigate = useNavigate();

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
      const leadNode = window.document.getElementById(LEAD.id);

      const removeLeadScript = () => {
        if (leadNode) leadNode.remove();
        const leadWrapper = window.document.getElementById(LEAD.wrapperId);
        if (leadWrapper) leadWrapper.remove();
      };
      removeLeadScript();
      navigate(ROUTES.congrats);
    },
  });

  useEffect(() => {
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
              type="text"
              name="firstName"
              placeholder="First Name"
              className="light-grey width-100 small state"
            />
            <input
              required
              onChange={handleChange}
              value={values.lastName}
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="light-grey width-100 small state"
            />
          </div>

          <input
            required
            onChange={handleChange}
            type="email"
            value={values.email}
            name="email"
            placeholder="Email Address"
            className="address small"
          />
          <PhoneInput
            country={"us"}
            onlyCountries={["us"]}
            value={values.mobile}
            onChange={(value) =>
              handleChange({ target: { value, name: "mobile" } })
            }
            name="mobile"
            inputProps={{ name: "mobile" }}
            containerStyle={{
              width: "100%",
              height: "64px",
              margin: "10px 0px",
              borderRadius: "10px",
            }}
            inputStyle={{ width: "100%", height: "64px", fontSize: "16px" }}
          />

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
