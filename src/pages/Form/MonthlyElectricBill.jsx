import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionStorageKeys } from "../../constants/localStorage";
import { MONTHLY_ELECTRIC_BILL } from "../../constants/monthlyElectricBill";
import { ROUTES } from "../../constants/routes";
import './index.scss'

export default function MonthlyElectricBill() {
    const navigate = useNavigate();

  const handleNext = (bill) => {
    sessionStorage.setItem(sessionStorageKeys.bill, bill)
    navigate(ROUTES.homeShades);
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
          <span className="orange bold small">20%</span>
          <span className="light-grey xxsmall">It will finish shortly..</span>
        </div>

        <div className="question felx-center-col">
          <div className="head media-font-20 orange medium bold">
            What is your average monthly electric bill?
          </div>

          {MONTHLY_ELECTRIC_BILL.map((bill) => (
            <div key={bill.value}
              onClick={() => {
                handleNext(bill.value);
              }}
              className="option"
            >
              {bill.label}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
