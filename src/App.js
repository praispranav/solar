import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import CallLand from "./pages/CallLand";
import { ROUTES } from "./constants/routes";
import "./mediaquery.css";
import "./App.scss";
import Wrapper from "./components/Wrapper";
import { v4 as uuid } from "uuid";

import Landing from "./pages/Landing";
import SeeIfYouQualify from "./pages/Form/SeeIfYouQualify";
import { localStorageKeys } from "./constants/localStorage";
import MonthlyElectricBill from "./pages/Form/MonthlyElectricBill";
import HomeShades from "./pages/Form/HomeSades";
import HomeOwner from "./pages/Form/HomeOwner";
import NameEmail from "./pages/Form/NameEmail";
import Congrats from "./pages/Form/Congrats";
import { HelmetProvider } from "react-helmet-async";
import ZipForm from "./pages/Form/ZipForm";
import ResidentialSolarProviders from "./pages/ResidentialSolarProviders";

const TopSolarCompanies = React.lazy(() => import("./pages/TopSolarCompanies"));
const CaliforniaPrivacyNotice = React.lazy(() =>
  import("./pages/CaliforniaPrivacyPolicy")
);
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndCondition = React.lazy(() => import("./pages/TermsAndCondition"));

function App() {
  const [preForm, setPreForm] = useState(true);

  const checkOrCreateVisitorId = () => {
    const localStorageVisitorId = localStorage.getItem(
      localStorageKeys.visitorId
    );
    if (localStorageVisitorId) {
    } else {
      const newVisitorId = uuid();
      localStorage.setItem(localStorageKeys.visitorId, newVisitorId);
    }
  };

  useEffect(() => {
    checkOrCreateVisitorId();
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              index
              path="/"
              element={
                <Wrapper>
                  <Landing preForm={preForm} setPreForm={setPreForm} />
                </Wrapper>
              }
            />

            <Route path={ROUTES.form} element={<Outlet />}>
              <Route
                path={ROUTES.seeIfUQualify}
                element={
                  <Wrapper>
                    <SeeIfYouQualify />
                  </Wrapper>
                }
              />
              <Route
                path={ROUTES.zip}
                element={
                  <Wrapper>
                    <ZipForm />
                  </Wrapper>
                }
              />
              <Route
                path={ROUTES.monthlyElectricBill}
                element={
                  <Wrapper>
                    <MonthlyElectricBill />
                  </Wrapper>
                }
              />
              <Route
                path={ROUTES.homeShades}
                element={
                  <Wrapper>
                    <HomeShades />
                  </Wrapper>
                }
              />
              <Route
                path={ROUTES.homeOwner}
                element={
                  <Wrapper>
                    <HomeOwner />
                  </Wrapper>
                }
              />
              <Route
                path={ROUTES.nameEmail}
                element={
                  <Wrapper>
                    <NameEmail />
                  </Wrapper>
                }
              />
              <Route
                path={ROUTES.congrats}
                element={
                  <Wrapper>
                    <Congrats />
                  </Wrapper>
                }
              />
            </Route>

            <Route path={ROUTES.callland} element={<CallLand />} />
            <Route
              path={ROUTES.residentialSolarProviders}
              element={
                  <ResidentialSolarProviders />
              }
            />

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
    </HelmetProvider>
  );
}

export default App;
