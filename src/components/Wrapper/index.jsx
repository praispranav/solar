import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ReviewCard } from "../ReviewCard/reviewcard.component";
import "./index.scss";

const rating5s = "/assets/images/rating5s.svg";
const trustpilot = "/assets/images/trustpilot.svg";
const footer = "/assets/images/footer.svg";
const logo = "/assets/images/logo.svg";

export default function Wrapper(props) {
  const route = useLocation();
  const navigate = useNavigate();

  return (
    <div className="AppStart">
      {route.pathname !== ROUTES.seeIfUQualify ? (
        <input id="leadid_token" name="universal_leadid" type="hidden" />
      ) : undefined}

      <div className="flex-center solar sticky-top">
        <img alt="" src={logo} />
        &nbsp;
        <div className="small bold">Solar Panel Quotes</div>
      </div>

      {props.children}

      <div className="review flex-center-col">
        <div className="heading flex-center-col">
          <span className="orange xxsmall">OUR CUSTOMERS SAY</span>

          <span className="bold media-font-22 large">What they're saying?</span>

          <span className="grey width-80 center media-font-14 lorem small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis tellus eu turpis sit eget mattis urna.
          </span>
        </div>

        <div className="rating media-flex-center-col flex-speven">
          <span className="dark-grey medium media-font-22 bold">Excellent</span>

          <img alt="" src={rating5s} />

          <span className="dark-grey media- small">Based on 786 reviews</span>

          <div>
            <img alt="" src={trustpilot} />
          </div>
        </div>

        <div className="center-align">
          <div className="cus-reviews">
            <ReviewCard
              head="They were so helpful and patient"
              content="Sheryl was so helpful and patient as she helped me navigate medicare plan options and find what is best."
              name="Maurice C."
            />

            <ReviewCard
              head="Matt Gardner was knowledgeable"
              content="Matt Gardner was knowledgeable about the medicare marketplace and current insurance companies and 2022 plans. He was very helpful getting us the right policy to fit our needs and at the right price."
              name="Donna L."
            />

            <ReviewCard
              head="Great Insurance Agent"
              content="I talked with a young man named Edis K. to finish my medicare sign-up process. He was amazing to work with on the phone. He walked me through stuff and spelled things out very clearly. He got me set up with just what I wanted: dental, vision and healthcare. Great guy!! Thanks again!"
              name="Donna L."
            />
          </div>
        </div>
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
          |<div className="xsmall bold">Copyright © 2021 | Adstia LLC</div>|
          <div className="xsmall">
            <span
              className="pointer"
              onClick={() => {
                navigate({pathname: ROUTES.californiaPrivacyNotice});
              }}
            >
              CALIFORNIA PRIVACY
            </span>{" "}
            |{" "}
            <span
              className="pointer"
              onClick={() => {
                navigate({ pathname: ROUTES.privacyPolicy });
              }}
            >
              PRIVACY POLICY
            </span>{' '}
            |{' '}
            <span
              className="pointer"
              onClick={() => {
                navigate({ pathname: ROUTES.termsAndCondition });
              }}
            >
              TERMS OF USE
            </span>
          </div>
        </div>

        <div className="xxsmall grey footer-dis">
          Disclaimer: senioradvantage.co is a referral source that provides
          information and access to a helpline to match consumers with companies
          that may provide certain insurance coverage to them.
          senioradvantage.co does not act as an insurance broker and does not
          make decisions about insurance coverage that may be available to you.
          senioradvantage.co doesn’t promise a specific outcome or the results
          you may achieve by calling the helpline. The helpline is free to call
          but the services or programs that you pursue may have costs associated
          with them. Neither senioradvantage.co nor any of the supplemental
          insurance plans to which you may be connected are endorsed by the U.S.
          Government or the federal Medicare program.
        </div>
      </footer>
    </div>
  );
}
