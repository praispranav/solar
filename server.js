const express = require("express");
const path = require("path");

const app = express();

const MODULE_TYPE = {
  full: "full",
  short: "short",
  call: "call",
};

const generateRoutes = (routes) => {
  let str = "";
  routes.forEach((route) => (str += `/${route}`));
  return str;
};

const ROUTES = {
  form: "/form",
    
  seeIfUQualify: "/form/see-if-qualify",
  monthlyElectricBill: "/form/monthly-electric-bill",
  homeShades: "/form/home-shades",
  homeOwner: "/form/home-owner",
  nameEmail: "/form/name-email",
  congrats: "/form/congrats",

  callland: "/callland",
  topSolarCompanies: "/top-solar-companies",
  californiaPrivacyNotice: "/california-privacy-notice",
  privacyPolicy: "/privacy-policy",
  termsAndCondition: "/terms-and-condition"
};

app.use(express.static(path.join(__dirname, "/build")));

const pages = Object.values(ROUTES);

pages.forEach((i) => {
  app.get(i, (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
