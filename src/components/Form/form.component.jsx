import React, { useState } from 'react';
import './form.stylesheet.css';
import axios from 'axios';
import noshade from './noshade.png';
import littleshade from './littleshade.png';
import partialshade from './partialshade.png';
import severeshade from './severeshade.png'

export const Form = ({setFormSubmited, setName}) => {
    const [formStep, setFormStep] = useState(0);
    const [formData, setFormData] = useState({});

    const addAddress = (e) => {
        if(e.key === "Enter"){
            setFormData({...formData, zip : e.target.value});
            setFormStep(4);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://sheet.best/api/sheets/95bdc3ff-b5b8-44ab-bdb3-953037019d0e', formData).then((response)=>{
            setName(formData['fname']);
            setFormSubmited(true);
        })
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
                    <div className='head orange medium bold'>What is your average monthly electric bill?</div>
                
                    
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
                    <div className='head orange medium bold'>How much shade does your home have?</div>
                
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
                    <div className='head orange medium bold'>Are you a homeowner?</div>
                
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
                    <div className='head orange medium bold'>What is your Address?</div>
                
                    <input onChange={(e) => {setFormData({...formData, address : e.target.value})}} type='text' placeholder='Address' className="address small" />

                    <div className='add-state'>
                        <input onChange={(e) => {setFormData({...formData, street : e.target.value})}} type="text" placeholder='Street' className='light-grey small state' />

                        <input onChange={(e) => {setFormData({...formData, state : e.target.value})}} type="text" placeholder='State / Province / Region' className='light-grey small state' />
                    </div>

                    <input onKeyDown={addAddress} type='text' placeholder='ZIP / Postal Code' className="address small" />
                
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
                    <div className='head orange medium bold'>Who is your Utility Provider?</div>
                
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
                    <div className='head orange medium bold'>See Your Free Quotes Now!</div>

                    <div className='add-state'>
                        <input required onChange={(e)=>{setFormData({...formData, fname : e.target.value})}} type="text" placeholder='First Name' className='light-grey small state' />
                        <input required onChange={(e)=>{setFormData({...formData, lname : e.target.value})}} type="text" placeholder='Last Name' className='light-grey small state' />
                    </div>

                    <input required onChange={(e)=>{setFormData({...formData, email : e.target.value})}} type='email' placeholder='Email Address' className="address small" />
                    <input required onChange={(e)=>{setFormData({...formData, phone : e.target.value})}} type='phone' placeholder='Phone Number' className="address small" />
                
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