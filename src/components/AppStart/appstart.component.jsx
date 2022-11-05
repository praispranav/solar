import './appstart.stylesheet.css';
import { FormStart } from '../FormStart/formstart.component';
import { PostForm } from '../PostForm/postform.component';
import { useState } from 'react';
import footer from '../../assets/footer.svg'
import '../../mediaquery.css';
import { Landing } from '../Landing/landing.component';
import logo from '../../assets/logo.svg';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { CompanyComparision } from '../CompanyComparision/companycomparision.component';


export function AppStart() {
    const [formSubmited, setFormSubmited] = useState(false);
    const [name, setName] = useState('');
    const [cusAdd, setCusAdd] = useState('');
    const [preForm, setPreForm] = useState(true);
    const navigate = useNavigate() ;

    const Decide = () =>(
        <div>
        {formSubmited? <PostForm name={name} add={cusAdd} /> : <FormStart setFormSubmited={setFormSubmited} setCusAdd={setCusAdd} setName={setName} />}
        </div>
    )



    return (
        <div className="AppStart">

        <div className='flex-center solar'>
            <img src={logo} />&nbsp;
            <div className='small bold'>Solar Panel Quotes</div>
        </div>
        
            <Routes>
            <Route exact path="/" element={<Landing preForm={preForm} setPreForm={setPreForm} />}  />
            <Route exact path="/:cid" element={<Landing preForm={preForm} setPreForm={setPreForm} />}  />
            <Route path="/form" element={<Decide />} />
            <Route path='/companies' element={<CompanyComparision />} />
            </Routes>
        
        <footer>
            <div className="bg-green">
            <img src={footer} className="footer-img" />
            </div>

            <div className='footer-links'>
            <div className='small logo flex-center'>
                <img src={logo} /> &nbsp;<span className='bold'>Solar Panel</span> Quotes
            </div>
            |
            <div className='xsmall bold'>Copyright © 2021 | Eruptic Inc.</div>
            |
            <div className='xsmall'><span className='pointer' onClick={() => {navigate("/california-privacy-notice")}}>CALIFORNIA PRIVACY</span> | <span className='pointer' onClick={()=>{navigate('/privacy-policy')}}>PRIVACY POLICY</span> | <span className='pointer' onClick={()=>{navigate('/terms-and-condition')}}>TERMS OF USE</span></div>

            </div>

            <div className="xxsmall grey footer-dis">
            Disclaimer: senioradvantage.co is a referral source that provides information and access to a helpline to match consumers with companies that may provide certain insurance coverage to them. senioradvantage.co does not act as an insurance broker and does not make decisions about insurance coverage that may be available to you. senioradvantage.co doesn’t promise a specific outcome or the results you may achieve by calling the helpline. The helpline is free to call but the services or programs that you pursue may have costs associated with them. Neither senioradvantage.co nor any of the supplemental insurance plans to which you may be connected are endorsed by the U.S. Government or the federal Medicare program.
            </div>
        </footer>

        </div>
    );
}

