import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionStorageKeys } from "../../constants/localStorage";
import { ROUTES } from "../../constants/routes";
import { YES_NO } from "../../constants/yesNo";
import "./index.scss"

export default function HomeOwner() {
  const navigate = useNavigate();

  const handleNext = (yesno) => {
    sessionStorage.setItem(sessionStorageKeys.homeOwner, yesno);
    navigate(ROUTES.nameEmail);
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="form flex-center-col">
      <div className="small">
        You May Be Eligible For A New US Solar Program.
      </div>

      <section className="flex-center-col">
        <div className="progress flex-spbet">
          <span className="orange bold small">70%</span>
          <span className="light-grey xxsmall">It will finish shortly..</span>
        </div>

        <div className="question felx-center-col">
          <div className="head media-font-20 orange medium bold">
            Are you a homeowner?
          </div>

          {YES_NO.map((i) => (
            <div key={i.value}
              onClick={() => {
                handleNext(i.value);
              }}
              className="option"
            >
              {i.label}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}