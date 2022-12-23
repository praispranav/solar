import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import "./index.scss"

const light = '/assets/images/light.svg';

const SeeIfYouQualify = () => {
  const [form, setForm] = useState({});
  const [search] = useSearchParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
              navigate(ROUTES.monthlyElectricBill)
            }}
          >
            See If You Qualify
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeIfYouQualify;