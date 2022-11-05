import React, { useState, useEffect } from 'react';
import './form.stylesheet.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import noshade from './noshade.svg';
import littleshade from './littleshade.svg';
import partialshade from './partialshade.svg';
import severeshade from './severeshade.svg';
import {useJsApiLoader, Autocomplete} from '@react-google-maps/api'
import { useRef } from 'react';
import Cookies from 'js-cookie';



export const Form = ({form, setFormSubmited, setName, setCusAdd}) => {
    const [formStep, setFormStep] = useState(0);
    const [formData, setFormData] = useState({});
    var [address, setAddress] = useState({});
    var autocomplete = null;
    var addInput = useRef();
    const fbc = Cookies.get('_fbc') || "";
    const fbp = Cookies.get('_fbp') || "";

    const apiKey = "AIzaSyASykO9iGndQinKKn0q0JWjjTgs628bKuY";
    // const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
    // const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

    const back = () => {
        setFormStep(formStep - 1);
    }

    const next = () => {
        const temp = document.getElementById('leadid_token').value;
        setFormStep(4); 
        setFormData({...formData, 
            street: address["city"], 
            state : address["state"], 
            address: addInput.current.value,
            fbc : fbc,
            fbp : fbp,
            JornayaToken : temp,
            user_agent : navigator.userAgent,
            ...form
        })
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    })   

    const extractAddress = (place) => {

        const addr = {
            city: "",
            state: "",
            zip: "",
            plain() {
                const city = this.city ? this.city + ", " : "";
                const zip = this.zip ? this.zip + ", " : "";
                const state = this.state ? this.state + ", " : "";
            }
            }
        
            // if (!Array.isArray(place?.address_components)) {
            //     setAddress(addr);
            //     return;
            // }
        
            place.address_components.forEach(component => {
            const types = component.types;
            const value = component.long_name;
        
            if (types.includes("locality")) {
                addr.city = value;
                setFormData({...formData, street : value});
            }
        
            if (types.includes("administrative_area_level_2")) {
                addr.state = value;
                setFormData({...formData, state : value});
            }
        
            if (types.includes("postal_code")) {
                addr.zip = value;
                setFormData({...formData, zip : value});
            }

            if(types.includes("formatted_address")){
                setFormData({...formData, address: value});
            }
        
            });
        
        setAddress(addr);
        return;
    }

    const load = (complete) => {
        autocomplete = complete;
    }

    const change = () => {
        if (autocomplete !== null) {
            console.log(autocomplete.getPlace());
            extractAddress(autocomplete.getPlace());
            // console.log(address)
            // console.log(formData["address"]);
            // console.log(formData["zip"]);
            // console.log(formData["street"]);
            // console.log(formData["state"]);
            const temp = document.getElementById('leadid_token').value;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            mode : 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('https://script.google.com/macros/s/AKfycbz0gdEBn41eamB_4dXlPweBCc5woua_492RPTvKmn1OzEac1EF9mIv7qj01-sAVPVpmow/exec', requestOptions)
            .then(response => {
                setFormSubmited(true); 
                setName(formData.fname);
                setCusAdd(formData["street"] + ", " + formData["state"]);
                Cookies.set('full_name', formData['firstName'] + " " + formData['lastName']);
                Cookies.set('userIp', formData['userIp']);
                Cookies.set('user_agent', formData['user_agent']);
                Cookies.set('zip', formData['zip']);
                Cookies.set('city', formData['city']);
                Cookies.set('state', formData['state'])
                Cookies.set('firstName', formData['firstName'])
                Cookies.set('lastName', formData['lastName'])
                Cookies.set('email', formData['email'])
                Cookies.set('JornayaToken', formData['JornayaToken'])
            })
    }

    useEffect(()=>{
        if (typeof window !== "undefined") {
            const s = document.createElement('script');
            s.id = 'LeadiDscript_campaign';
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//create.lidstatic.com/campaign/1a1b4c75-9f48-ab0e-0d04-dbc113047fc3.js?snippet_version=2';
            <noscript><img src='//create.leadid.com/noscript.gif?lac=2bfe796d-86b0-578a-2976-5c28f271c074&lck=1a1b4c75-9f48-ab0e-0d04-dbc113047fc3&snippet_version=2' alt="" /></noscript>
            document.body.appendChild(s);
            
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'utm_source':form['utm_source'],
                'campaign_id' : form['CID'],
                'adset_id': form['ADS_ID'],
                'ad_id':  form['ADID']});
        }
    },[])

    return(
    <form className='form flex-center-col' onSubmit={handleSubmit}>

        <input id="leadid_token" name="universal_leadid" type='hidden' />

        <div className='small'>You May Be Eligible For A New US Solar Program.</div>
        {formStep === 0 && (
            <section className='flex-center-col'>
                <div className='progress flex-spbet'>
                    <span className='orange bold small'>10%</span>
                    <span className='light-grey xxsmall'>It will finish shortly..</span>
                </div>

                <div className='question felx-center-col'>
                    <div className='head media-font-20 orange medium bold'>What is your average monthly electric bill?</div>
                
                    
                    <div onClick={() => {setFormData({bill : "Less than $100"}); setFormStep(1)}} className='option'>Less than $100</div>
                    <div onClick={() => {setFormData({bill : "$100 - $150"}); setFormStep(1)}} className='option'>$100 - $150</div>
                    <div onClick={() => {setFormData({bill : "$150 - $250"}); setFormStep(1)}} className='option'>$150 - $250</div>
                    <div onClick={() => {setFormData({bill : "$250+"}); setFormStep(1)}} className='option'>$250+</div>
                    
                </div>
            </section>
        )}

        {formStep === 1 && (
            <section className='flex-center-col'>
                <div className='progress flex-spbet'>
                    <span className='orange bold small'>30%</span>
                    <span className='light-grey xxsmall'>It will finish shortly..</span>
                </div>

                <div className='question felx-center-col'>
                    <div className='head media-font-20 orange medium bold'>How much shade does your home have?</div>
                
                    <div className='options'>
                        <div onClick={() => {setFormData({...formData, shade : "No Shade"}); setFormStep(2)}} className='img-option'><img src={noshade} />No Shade</div>
                        <div onClick={() => {setFormData({...formData, shade : "Little Shade"}); setFormStep(2)}} className='img-option'><img src={littleshade} />Little Shade</div>
                        <div onClick={() => {setFormData({...formData, shade : "Partial Shade"}); setFormStep(2)}} className='img-option'><img src={partialshade} />Partial Shade</div>
                        <div onClick={() => {setFormData({...formData, shade : "Severe Shade"}); setFormStep(2)}} className='img-option'><img src={severeshade} />Severe Shade</div>
                    </div>
                </div>

                {/* <div onClick={back} className="orange back"> &lt; Back</div> */}
            </section>
        )}

        {formStep === 2 && (
            <section className='flex-center-col'>
                <div className='progress flex-spbet'>
                    <span className='orange bold small'>50%</span>
                    <span className='light-grey xxsmall'>It will finish shortly..</span>
                </div>

                <div className='question felx-center-col'>
                    <div className='head media-font-20 orange medium bold'>Are you a homeowner?</div>
                
                    <div onClick={() => {setFormData({...formData,homeowner : "yes"}); setFormStep(3)}} className='option'>Yes</div>
                    <div onClick={() => {setFormData({...formData,homeowner : "no"}); setFormStep(3)}} className='option'>No</div>
                
                </div>

                {/* <div onClick={back} className="orange back"> &lt; Back</div> */}
            </section>
        )}

        {formStep === 3 && (
            <section className='flex-center-col'>
                <div className='progress flex-spbet'>
                    <span className='orange bold small'>70%</span>
                    <span className='light-grey xxsmall'>It will finish shortly..</span>
                </div>

                <div className='question felx-center-col'>
                    <div className='head media-font-20 orange medium bold'>What is your Address?</div>
                    <Autocomplete onLoad={load} onPlaceChanged={change}>
                        <input type='text' ref={addInput} onChangeCapture={(e)=>{setFormData({...formData, address: e.target.value})}}  placeholder='Address' className="address small" />
                    </Autocomplete>

                    <div className='media-flex-center-col add-state'>
                        <input disabled value={address["city"]}  type="text" placeholder='Street' className='width-100 small state' />
                        <input disabled value={address["state"]} type="text" placeholder='State / Province / Region' className='width-100 small state' />
                    </div>

                    <input type='text' value={address["zip"]} disabled placeholder='ZIP / Postal Code' className="address small" />                    
                
                    <div className='light-grey small'>We'll use satellite imagery based on your address to develop an accurate solar estimate for your home. All information is kept completely confidential.</div>
                
                    <div className='flex-spbet'>
                        <div onClick={back} className="orange back"> &lt; Back</div>  
                        <div onClick={next} className='continue medium'>Conitue</div>
                    </div>
                </div>

                
            </section>
        )}

        {formStep === 4 && (
            <section className='flex-center-col'>
                <div className='progress flex-spbet'>
                    <span className='orange bold small'>90%</span>
                    <span className='light-grey xxsmall'>It will finish shortly..</span>
                </div>

                <div className='question felx-center-col'>
                    <div className='head orange media-font-20 medium bold'>Who is your Utility Provider?</div>
                
                    <div className='provider'>
                        <div onClick={() => {setFormData({...formData, provider : "Dominian Energy"}); setFormStep(5)}} className='small option'>Dominian Energy</div>
                        <div onClick={() => {setFormData({...formData, provider : "Appalachian Power"}); setFormStep(5)}} className='small option'>Appalachian Power</div>
                        <div onClick={() => {setFormData({...formData, provider : "Rappahannock Electric Co-op"}); setFormStep(5)}} className='small option'>Rappahannock Electric Co-op</div>
                        <div onClick={() => {setFormData({...formData, provider : "Northern Virginia Electric Co-op"}); setFormStep(5)}} className='small option'>Northern Virginia Electric Co-op</div>
                        <div onClick={() => {setFormData({...formData, provider : "Shenandoah Valley Electric Co-op"}); setFormStep(5)}} className='small option'>Shenandoah Valley Electric Co-op</div>
                        <div onClick={() => {setFormData({...formData, provider : "Southside Electric Co-op"}); setFormStep(5)}} className='small option'>Southside Electric Co-op</div>
                        <div onClick={() => {setFormData({...formData, provider : "Other"}); setFormStep(5)}} className='small option'>Other</div>
                    </div>

                    {/* <div onClick={back} className="orange back"> &lt; Back</div> */}
                </div>
            </section>
        )}

        {formStep === 5 && (
            <section className='flex-center-col'>
                <div className='progress flex-spbet'>
                    <span className='orange bold small'>100%</span>
                    <span className='light-grey xxsmall'>One Last Step!</span>
                </div>

                <div className='question felx-center-col'>
                    <div className='head media-font-20 orange medium bold'>See Your Free Quotes Now!</div>

                    <div className='add-state media-flex-center-col'>
                        <input required onChange={(e)=>{setFormData({...formData, firstName : e.target.value})}} type="text" placeholder='First Name' className='light-grey width-100 small state' />
                        <input required onChange={(e)=>{setFormData({...formData, lastName : e.target.value})}} type="text" placeholder='Last Name' className='light-grey width-100 small state' />
                    </div>

                    <input required onChange={(e)=>{setFormData({...formData, email : e.target.value})}} type='email' placeholder='Email Address' className="address small" />
                    <PhoneInput country={'us'} value='' onChange={phone => formData['phone'] = phone} containerStyle={{width: '100%', height: '64px', margin: '10px 0px', borderRadius: '10px'}} inputStyle={{width: '100%', height: '64px', fontSize: '16px'}} />
                    
                
                    <div className='xxsmall light-grey'>
                        By clicking Get My Free Quote, I agree to the <span className='bold'>Terms of Service</span> and <span className='bold'>Privacy Policy</span> and authorize up to 4 <span className='bold'>solar energy companies</span>, their contractors and partners to contact me with offers about solar product or service by telephone calls, emails, artificial voice, and pre-recorded/text messages, using an automated telephone technology, to the number and email I provided above, even if my number is a mobile number or is currently listed on any state, federal or corporate Do Not Call list. I 
                        understand that my consent here is not a condition of purchase of any goods or services. Message and data rates may apply. <span className='bold'>California Notice.</span>
                    </div>

                    <button type='submit' className='submit-data medium'>Get my Free Quote</button>
                </div>
            </section>
        )}

    </form>)
}