import './App.css';
import logo from './assets/logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppStart } from './components/AppStart/appstart.component';
import { CallLand } from './components/CallLand/callland.component';
import { TopSolarCompanies } from './components/TopSolarCompanies/topSolarCompanies';
import { CaliforniPrivacyNotice } from './components/CaliforniaPrivacyNotice/californiaPrivacyNotice';
import { PrivacyPolicy } from './components/PrivacyPolicy/privacyPolicy';
import { TermsAndCondition } from './components/TermsAndCondition/termsAndCondition';


function App() {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path="*" element={<AppStart />} />
          <Route path="/callland" element={<CallLand />} />
          <Route path='/top-solar-companies' element={<TopSolarCompanies />} />
          <Route path='/california-privacy-notice' element={<CaliforniPrivacyNotice />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-condition' element={<TermsAndCondition />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
