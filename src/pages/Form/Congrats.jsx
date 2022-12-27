import React, { useEffect, useState } from "react";

import "./index.scss";
import { sessionStorageKeys } from "../../constants/localStorage";
import { useInitRingba } from "../../hooks/useRgba"

const call = "/assets/images/call/call.svg";
const agent = "/assets/images/call/agent.svg";
const check = "/assets/images/call/check.svg";
const loading = "/assets/images/call/loading.svg";
const location = "/assets/images/call/location.svg";
const user = "/assets/images/call/user.svg";
const company = "/assets/images/call/company.svg";
const solar = "/assets/images/call/solar.svg";

let load = 0;

const PreLoader = ({ name, address }) => {
  return (
    <div className="preloader">
      <div className="preloader-details">
        <div className="large bold orange">
          Congratulations, We’ve Found Plans in your Area!
        </div>

        <div className="space25" />

        <div id="div1" className="medium preload-div">
          <div>
            <img alt="" src={user} /> &nbsp;
            {name}
          </div>

          <img alt="" src={check} />
        </div>

        <div id="div2" className="medium preload-div border-top">
          <div>
            <img alt="" src={location} /> &nbsp;
            {address}
          </div>

          <img alt="" src={check} />
        </div>

        <div id="div2" className="medium preload-div border-top">
          <div>
            <img alt="" src={company} /> &nbsp; Aetna | Blue Cross | Humana |
            United | Other
          </div>

          <img alt="" src={check} />
        </div>

        <div id="div2" className="medium preload-div border-top">
          <div>
            <img alt="" src={solar} /> &nbsp; New Solar 2022 Quotes
          </div>

          <img alt="" src={check} />
        </div>

        <div id="div3" className="medium preload-div border-top">
          <div>
            <img alt="" src={agent} /> &nbsp; Connecting you with a licensed
            agent...
          </div>

          <img alt="" className="rotat" src={loading} />
        </div>
      </div>
    </div>
  );
};

const Post = ({ number, name, sec, min }) => {
  const { staticNumber } = useInitRingba()
  return (
    <div className="post-form flex-center-col">
      <div className="orange media-font-22 large bold">
        Congratulations, {name}!
      </div>

      <div className="space25"></div>

      <div className="small grey">
        You pre-qualify for $2,500 Flex Card plus $0 cost Vision & Dental
        coverage.
        <br />
        Call us now to secure your possible additional benefits & flex card.
      </div>

      <div className="space25"></div>

      <a
        href={`tel:+${number || staticNumber}`}
        className="call media-font-22 flex-center large bold"
      >
        <div className="calllogo">
          <img alt="" src={call} className="cal" />
        </div>
        &nbsp; {number || staticNumber}
      </a>

      <div className="space25"></div>

      <div className="small">
        Act fast! This application expires in:{" "}
        <span className="bold orange-red">
          0{min}:{sec > 9 ? sec : `0${sec}`} minute.
        </span>
      </div>
    </div>
  );
};

const Congrats = ({ name, address }) => {
  name = sessionStorage.getItem(sessionStorageKeys.firstName) + ' ' + sessionStorage.getItem(sessionStorageKeys.lastName)
  
  const getAddress = () =>{
    const result = sessionStorage.getItem(sessionStorageKeys.zipCodeExtraValues);
    if(result){
      const parsed = JSON.parse(result);
      return parsed.city + ', ' + parsed.state
    }
  }
  
  address = getAddress();

  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(3);
  const [num, setNum] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  while (true) {
    setTimeout(function () {
      if (min === 0 && sec === 0) {
        return;
      } else if (sec === 0) {
        load += 1;
        setMin(min - 1);
        setSec(59);
      } else {
        setSec(sec - 1);
      }
    }, 1000);

    return load ? (
      <Post number={window.pnumber} name={name} sec={sec} min={min} />
    ) : (
      <PreLoader name={name} address={address} />
    );
  }
};

export default Congrats