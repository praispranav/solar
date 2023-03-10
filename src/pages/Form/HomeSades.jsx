import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_SHADES } from "../../constants/homeShades";
import { sessionStorageKeys } from "../../constants/localStorage";
import { ROUTES } from "../../constants/routes";
import "./index.scss"
import { useGeneratorQuery } from "../../hooks/useGeneratorQuery";
import { useRgbaHook } from "../../hooks/useRgba";

export default function HomeShades() {
  const navigate = useNavigate();
  const generatorQuery = useGeneratorQuery();
  const { storeRgbaData } = useRgbaHook();

  const handleNext = (shadeValue) => {
    storeRgbaData('shade', shadeValue);
    sessionStorage.setItem(sessionStorageKeys.shade, shadeValue);
    navigate({
      pathname: ROUTES.homeOwner,
      search: generatorQuery.get(),
    })
  };

  const checkOldFormValues = () => {
    if (!sessionStorage.getItem(sessionStorageKeys.bill))
      return navigate({
        pathname: ROUTES.monthlyElectricBill,
        search: generatorQuery.get(),
      });
  };

  useEffect(() => {
  checkOldFormValues()
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="form flex-center-col">
      <div className="small">
        You May Be Eligible For A New US Solar Program.
      </div>

      <section className="flex-center-col">
        <div className="progress flex-spbet">
          <span className="orange bold small">50%</span>
          <span className="light-grey xxsmall">It will finish shortly..</span>
        </div>

        <div className="question felx-center-col">
          <div className="head media-font-20 orange medium bold">
            How much shade does your home have?
          </div>

          <div className="options">
            {HOME_SHADES.map((shade) => (
              <div key={shade.value}
                onClick={() => {
                  handleNext(shade.value);
                }}
                className="img-option"
              >
                <img alt="" src={shade.image} />
                {shade.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
