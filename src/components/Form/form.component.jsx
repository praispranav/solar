import React, { useRef, useState, useEffect } from 'react';
import './form.stylesheet.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import noshade from './noshade.png';
import littleshade from './littleshade.png';
import partialshade from './partialshade.png';
import severeshade from './severeshade.png'


const extractAddress = (place) => {

    const address = {
        city: "",
        state: "",
        zip: "",
        country: "",
        plain() {
            const city = this.city ? this.city + ", " : "";
            const zip = this.zip ? this.zip + ", " : "";
            const state = this.state ? this.state + ", " : "";
            return city + zip + state + this.country;
        }
        }
    
        if (!Array.isArray(place?.address_components)) {
        return address;
        }
    
        place.address_components.forEach(component => {
        const types = component.types;
        const value = component.long_name;
    
        if (types.includes("locality")) {
            address.city = value;
        }
    
        if (types.includes("administrative_area_level_2")) {
            address.state = value;
        }
    
        if (types.includes("postal_code")) {
            address.zip = value;
        }
    
        if (types.includes("country")) {
            address.country = value;
        }
    
        });
    
    return address;
}



export const Form = ({setFormSubmited, setName}) => {
    const [formStep, setFormStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [address, setAddress] = useState("");
    const searchInput = useRef(null);

    const apiKey = process.env.VITE_APP_GMAP_API_KEY;
    const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
    const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

    const loadAsyncScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            Object.assign(script, {
                type: "text/javascript",
                async: true,
                src
            })
            script.addEventListener("load", () => resolve(script));
            document.head.appendChild(script);
            })
    }

    // init gmap script
    const initMapScript = () => {
        // if script already loaded
        if(window.google) {
        return Promise.resolve();
        }
        const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
        return loadAsyncScript(src);
    }

    // do something on address change
    const onChangeAddress = (autocomplete) => {
        const place = autocomplete.getPlace();
        setAddress(extractAddress(place));
    }

    // init autocomplete
    const initAutocomplete = () => {
        if (!searchInput.current) return;

        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

    }

    const reverseGeocode = ({ latitude: lat, longitude: lng}) => {
        const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
        searchInput.current.value = "Getting your location...";
        fetch(url)
            .then(response => response.json())
            .then(location => {
                const place = location.results[0];
                const _address = extractAddress(place);
                setAddress(_address);
                searchInput.current.value = _address.plain();
                })
        }
        
        
    const findMyLocation = () => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            reverseGeocode(position.coords)
        })
        }
    }
    
    
    
    
    
    // load map script after mounted
    useEffect(() => {
        initMapScript().then(() => initAutocomplete())
    }, []);

    // const privateKey = "c74f1b2efb6d7377d8306082a930f9368ea2cc5a";
    // const spreadSheetId = "19-qrUc2n7mUO8iMvIY-PqQJS79LU_sWuzZtyIT6KzAM";
    // const sheetId = "0";
    // const clientEmail = "solar-55@clickdee.iam.gserviceaccount.com"
    // const doc = new GoogleSpreadsheet(spreadSheetId);
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // axios.post('https://sheet.best/api/sheets/95bdc3ff-b5b8-44ab-bdb3-953037019d0e', formData).then((response)=>{
    //     //     setName(formData['fname']);
    //     //     setFormSubmited(true);
    //     // })

    //     try {
    //         await doc.useServiceAccountAuth({
    //             client_email: clientEmail,
    //             private_key: privateKey,
    //         });
    //         // loads document properties and worksheets
    //         await doc.loadInfo();
        
    //         const sheet = doc.sheetsById[sheetId];
    //         const result = await sheet.addRow(formData);
    //         } catch (e) {
    //             console.error('Error: ', e);
    //         }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            mode : 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('https://script.google.com/macros/s/AKfycbyolGwdRFjV6TDNWkPNW8ijXthFTPwJFP_SRGxDa9z9rxsOYdVI9851u1cANyWDvRPDbw/exec', requestOptions)
            .then(response => (setFormSubmited(true), setName(formData.fname)))
    }

    return(
    <form className='form flex-center-col' onSubmit={handleSubmit}>

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
                
                    <input onChange={(e) => {setFormData({...formData, address : e.target.value})}} type='text' ref={searchInput} placeholder='Address' className="address small" />

                    <div className='media-flex-center-col add-state'>
                        <input onChange={(e) => {setFormData({...formData, street : e.target.value})}} type="text" placeholder='Street' className='light-grey width-100 small state' />

                        <input onChange={(e) => {setFormData({...formData, state : e.target.value})}} type="text" placeholder='State / Province / Region' className='width-100 light-grey small state' />
                    </div>

                    <input onChange={(e) => {setFormData({...formData, zip : e.target.value})}} type='number' placeholder='ZIP / Postal Code' className="address small" />

                    <div onClick={() => {setFormStep(4);}} className='qualify-button medium'>Next</div>
                
                    <div className='light-grey small'>We'll use satellite imagery based on your address to develop an accurate solar estimate for your home. All information is kept completely confidential.</div>
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
                        <input required onChange={(e)=>{setFormData({...formData, fname : e.target.value})}} type="text" placeholder='First Name' className='light-grey width-100 small state' />
                        <input required onChange={(e)=>{setFormData({...formData, lname : e.target.value})}} type="text" placeholder='Last Name' className='light-grey width-100 small state' />
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