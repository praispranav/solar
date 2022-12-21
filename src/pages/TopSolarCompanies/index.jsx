import React from "react";
import "./index.scss";
import { TOP_COMPANIES } from "../../constants/topCompanies";

const footer = "/assets/images/footer.svg";
const logo  = "/assets/images/logo.svg";

const descriptionText = `Disclaimer: senioradvantage.co is a referral source that provides
information and access to a helpline to match consumers with companies
that may provide certain insurance coverage to them.
senioradvantage.co does not act as an insurance broker and does not
make decisions about insurance coverage that may be available to you.
senioradvantage.co doesn’t promise a specific outcome or the results
you may achieve by calling the helpline. The helpline is free to call
but the services or programs that you pursue may have costs associated
with them. Neither senioradvantage.co nor any of the supplemental
insurance plans to which you may be connected are endorsed by the U.S.
Government or the federal Medicare program.`;

const TopSolarCompanies = () => {
  return (
    <div className="top-solar-companies">
      <div className="flex-center solar sticky-top">
        <img alt="" src={logo} />
        &nbsp;
        <div className="small bold">Solar Panel Quotes</div>
      </div>

      <div className="top-solar-companies-content">
        <p className="large bold">Top Solar Companies in U.S.</p>

        <p className="small bold">
          Matched solar partners included but not limited to:
        </p>
        <ul className="small align-left">{TOP_COMPANIES.map((i) => i)}</ul>
      </div>

      <footer>
        <div className="bg-green">
          <img alt="" src={footer} className="footer-img" />
        </div>

        <div className="footer-links">
          <div className="small logo flex-center">
            <img alt="" src={logo} /> &nbsp;
            <span className="bold">Solar Panel</span> Quotes
          </div>
          |<div className="xsmall bold">Copyright © 2021 | Eruptic Inc.</div>|
          <div className="xsmall">
            CALIFORNIA PRIVACY | PRIVACY POLICY | TERMS OF USE
          </div>
        </div>

        <div className="xxsmall grey footer-dis">{descriptionText}</div>
      </footer>
    </div>
  );
};

export default TopSolarCompanies;
