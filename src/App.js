import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AppStart } from './components/AppStart/appstart.component';
import { CallLand } from "./components/CallLand/callland.component";
import { ROUTES } from "./constants/routes";

import "./mediaquery.css";
import "./App.scss";

const TopSolarCompanies = React.lazy(() => import("./pages/TopSolarCompanies"));
const CaliforniaPrivacyNotice = React.lazy(() =>
  import("./pages/CaliforniaPrivacyPolicy")
);
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndCondition = React.lazy(() => import("./pages/TermsAndCondition"));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path={ROUTES.all} element={<AppStart />} /> */}
          <Route path={ROUTES.callland} element={<CallLand />} />
          <Route
            path={ROUTES.topSolarCompanies}
            element={
              <React.Suspense fallback={<></>}>
                <TopSolarCompanies />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES.californiaPrivacyNotice}
            element={
              <React.Suspense fallback={<></>}>
                <CaliforniaPrivacyNotice />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES.privacyPolicy}
            element={
              <React.Suspense fallback={<></>}>
                <PrivacyPolicy />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTES.termsAndCondition}
            element={
              <React.Suspense fallback={<></>}>
                <TermsAndCondition />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
