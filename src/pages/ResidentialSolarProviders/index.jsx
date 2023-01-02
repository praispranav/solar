import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./index.scss";
import { RESIDENTIAL_SOLAR_PROVIDER } from "../../constants/residentialSolarProviders";
import { Footer, Navbar } from "../../components/Wrapper";

const editorChoice = "/assets/images/editorChoice.svg";

function Heading() {
  return (
    <div className="heading-container">
      <div>
        <h1>Top 5 Residential Solar Providers</h1>
        <p>April 2022 Ratings</p>
      </div>
    </div>
  );
}

function SolarProviderCardHeader() {
  return (
    <div className="solar-provider-header">
      <img src={editorChoice} alt="editor choice solar providers" />
      <p>Overall Best Solar Provider</p>
    </div>
  );
}

function SolarProviderCard({
  position,
  name,
  image,
  rating,
  ratingQuote,
  userRatings,
  number,
  features,
  stars
}) {
  return (
    <div className="solar-provider-card">
      <div>
        <p className="position">#{position}</p>
      </div>
      <div className="content">
        <div className="logo">
          <img src={image} alt={name} />
        </div>

        <div className="vertical-line" />

        <div className="rating-section">
          <p className="rating-number">{rating}</p>
          <Stack spacing={0}>
            <Rating
              name="half-rating"
              defaultValue={Number(stars)}
              precision={0.5}
              readOnly
            />
          </Stack>
          <p className="quote">{ratingQuote}</p>
          <p className="user-rating">User Rating ({userRatings})</p>
        </div>

        <div className="vertical-line" />
        
        <div className="company-details">
          <h4 className="company-name">{name}</h4>
          { number ? <p className="number">{number}</p> : undefined }
          <ul>
            {features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="vertical-line" />

        <div className="button-group">
          <button className="get-quote">
            <span>Get Quote</span>
          </button>
          {
            position === 1 ? (
          <button className="call-now">
            <img src="/assets/images/whiteCallButton.svg" />
            <span>Call Now</span>
          </button>
            ) : undefined
          }
        </div>
      </div>
    </div>
  );
}

export default function ResidentialSolarProviders() {
  return (
    <>
    <Navbar />
      <Heading />
      <div className="center">
        <div className="solar-container">
          <SolarProviderCardHeader />
          <div>
            {RESIDENTIAL_SOLAR_PROVIDER.map((solar) => (
              <SolarProviderCard {...solar} key={solar.name} />
            ))}
          </div>
          <div style={{ marginTop: "60px" }} />
          <SolarProviderCardHeader />
          <div>
            {RESIDENTIAL_SOLAR_PROVIDER.slice(0,1).map((solar) => (
              <SolarProviderCard {...solar} key={solar.name} />
            ))}
          </div>
          <div style={{ marginBottom: "200px" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}
