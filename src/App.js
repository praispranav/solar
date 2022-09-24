import './App.css';
import logo from './assets/logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppStart } from './components/AppStart/appstart.component';
import { CallLand } from './components/CallLand/callland.component';


function App() {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path="*" element={<AppStart />} />
          <Route path="/callland" element={<CallLand />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
