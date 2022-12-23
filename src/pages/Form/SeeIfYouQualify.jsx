import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ReviewCard } from "../../components/ReviewCard/reviewcard.component";
import { useInitRingba, useRgbaHook } from "../../hooks/useRgba";

const rating5s = "/assets/images/rating5s.svg";
const trustpilot = "/assets/images/trustpilot.svg";
const light = '/assets/images/light.svg';

const SeeIfYouQualify = () => {
  const [form, setForm] = useState({});
  const [search] = useSearchParams();

  useEffect(() => {
    axios
      .get(
        "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      )
      .then((response) => {
        setForm({
          userIp: response.data["IPv4"],
          Campaign_Name: search.get("CID"),
          Adset_Name: search.get("ADS_ID"),
          Ad_Name: search.get("ADID"),
          fbclid: search.get("fbclid"),
          utm_source: search.get("utm_source"),
        });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          utm_source: search.get("utm_source"),
          campaign_id: search.get("CID"),
          adset_id: search.get("ADS_ID"),
          ad_id: search.get("ADID"),
        });
      });
  }, [search]);

  return (
    <div>
      <div className="stepform flex-center">
        <div className="preform flex-center-col">
          <img alt="" src={light} />

          <div className="space25"></div>

          <div className="bold large media-font-22">
            NEW MEDICARE BENEFITS UPDATE
          </div>

          <div className="space25"></div>

          <div className="quote medium media-font-14 orange center">
            Americans Ages 65+ In Rajasthan Have 10 days to claim additional
            benefits & get up to $240 monthly in OTC benefits
          </div>

          <div className="space25"></div>

          <div className="quote media-font-14 small">
            Thanks to a new Medicare Advantage package, Americans age 65+ could
            get $148.50* monthly added to their social security check with
            No-Cost Vision & Dental Benefits.
          </div>

          <div className="space25"></div>

          <button
            className="qualify-button media-font-22 medium"
            onClick={() => {
            }}
          >
            See If You Qualify
          </button>
        </div>
      </div>

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
    </div>
  );
};

export default SeeIfYouQualify;