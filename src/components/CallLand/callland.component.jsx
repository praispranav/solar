import React from 'react';
import logo from '../../assets/logo.png';
import "./callland.stylesheet.css";
import call_icon from './call-icon.png';
import image1 from './impage1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import number from './number.png';
import tick from './tick.png';
import rating5s from '../../assets/rating5s.png';
import trustpilot from '../../assets/trustpilot.png';
import { ReviewCard } from '../ReviewCard/reviewcard.component';
import solarloan from '../Landing/solar-loan.png';
import cashpurchase from '../Landing/cash-purchase.png';
import footer from '../../assets/footer.png'


export const CallLand = () => {
    return (<div className='call-land'>
        <div className='solar-call'>
            <div className='logo'>
                <img src={logo} /> &nbsp; 
                <span className='bold orange small'>SOLAR PANEL</span> &nbsp;
                <span className='orange xxsmall'>Quotes</span>
            </div>

            <div className='number'>
                <span className='small grey'>Call us at</span> &nbsp;
                <img src={call_icon} /> &nbsp;
                <span className='orange bold small'>866-951-5443</span>
            </div>
        </div>

        <div className='call-land-float'>
            <div>
            We're Available Now
            </div>

            <div>
            Our Fully Trained Experts Are Ready to Help You. <br/>Call Now For Your Risk-FREE Quote.
            </div>

            <div className='number'>
                <span className='small grey'>Call us at</span> &nbsp;
                <img src={call_icon} /> &nbsp;
                <span className='orange bold small'>866-951-5443</span>
            </div>

            <img src={call_icon} className="call-land-float-icon" />
        </div>

        <div className='call-land-main flex-center-col'>

            <div className='bold orange font-40'>
            Delhi, DL Pest Exterminator
            </div>
            <div className='space25' />
            <div className='medium'>
            Delhi Number 1 Pest Exterminator is just <span className='bold'>One Call Away!</span>
            </div>
            <div className='space25' />
            <div className='medium'>
            For Fast & Easy, Same-Day Service <br/>Call Now to Get Rid of Those Pesky Pests Today!
            </div>
            <div className='space25' />
            <img src={number} />
            <div className='space25' />
            <div className='flex-spbet'>
                <div className='flex-center'>
                    <img src={tick} /> &nbsp;
                    Zero-Obligation Estimates
                </div>

                <div className='flex-center pad-30'>
                    <img src={tick} /> &nbsp;
                    Trusted & Local
                </div>

                <div className='flex-center'>
                    <img src={tick} /> &nbsp;
                    First Class Customer Service
                </div>
            </div>

        </div>

        <div className='call-land-sponsers'>
            <span className='orange small'>Trusted By</span>

            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
            <img src={image5} />

        </div>

        <div className='call-land-service'>

            <div className='orange xsmall'>TOP-NOTCH Service!</div>
            <div className='space25' />
            <div className='bold medium'>Call Us Today For Fast, Reliable-Same Day Service!</div>
            <div className='space25' />
            <div className='small text-align-left'>
            We understand how frustrating those annoying pests can be. These creatures are running amuck in and around your home is super frustrating! You may love your pets, but you don’t love those pesky little pests.
            </div>
            <div className='space25' />
            <div className='small text-align-left'>
            If you need help to get rid of them and live in Delhi or the nearby area, you've come to the right place. First things first. We’ll identify the extent of your infestation and make it disappear — quickly, safely, and without breaking the bank. We deal with various pests, none of which can beat us at our own game. We deal with:
            </div>

            <div className='space25' />
            <div className='space25' />

            <div className='call-land-service-number'>

                <div>
                    <div className='bold small text-align-left'>We're Available Now</div>
                    <div className='space10' />
                    <div className='xsmall text-align-left'>
                    Our Fully Trained Experts Are Ready to Help You.<br />Call Now For Your Risk-FREE Quote
                    </div>
                </div>
                
                <img src={number} />

            </div>

        </div>

        <div className='call-land-process' >

            <div className='orange xsmall text-align-center'>OUR PROCESS</div>
            <div className="space10" />
            <div className='bold medium text-align-center'>How exactly we work?</div>
            <div className='space25' />
            <div className='small grey text-align-center'>
                Our vast network of exterminators has been connected to locals just like you, thanks to our 24/7 call service. Here’s what to do when you’re in a pest pickle.
            </div>
            <div className='space25' />
            <div className='call-land-process-step'>
                <div className='medium bold'>
                    <div className='process-icon'>1</div>Contact Our Team
                </div>
                <div className='grey pad-50 small'>
                Call our 24-hour customer support and dispatch center. Tell us about your electrical needs and what type of work you need done.
                </div>
            </div>
            <div className='space25' />
            <div className='space25' />
            <div className='call-land-process-step'>
                <div className='medium bold'>
                Schedule Your Appointment
                </div>
                <div className='grey pad-50 small'>
                Next, our agents will try to instantly connect you with one of our local electrical contractors to schedule your appointment.
                </div>
            </div>
            <div className='space25' />
            <div className='space25' />
            <div className='call-land-process-step'>
                <div className='medium bold'>
                Service Completion
                </div>
                <div className='grey pad-50 small'>
                If you decide to proceed, your electrician will provide a firm quote and perform the tasks needed to complete your job.
                </div>
            </div>

        </div>
        
        <div className='call-land-faq'>
            <div>

                <details>
                    <summary className='medium media-font-16'>Federal Solar Investment Tax Credit</summary>

                    <p className='small media-font-14 grey'>
                    The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.
                    </p>
                
                </details>

                <details>
                    <summary className='medium media-font-16'>Net Energy Metering in Virginia</summary>

                    <p className='small media-font-14 grey'>
                    The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.
                    </p>
                
                </details>

                <details>
                    <summary className='medium media-font-16'>Additional Solar Rebates</summary>

                    <p className='small media-font-14 grey'>
                    The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.
                    </p>
                
                </details>


            </div>
            <div>

                <details>
                    <summary className='medium media-font-16'>Net Energy Metering in Virginia</summary>

                    <p className='small media-font-14 grey'>
                    The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.
                    </p>
                
                </details>

                <details>
                    <summary className='medium media-font-16'>Additional Solar Rebates</summary>

                    <p className='small media-font-14 grey'>
                    The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.
                    </p>
                
                </details>

                <details>
                    <summary className='medium media-font-16'>Net Energy Metering in Virginia</summary>

                    <p className='small media-font-14 grey'>
                    The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.
                    </p>
                
                </details>

            </div>
        </div>

        <div className='flex-center-col payment-option'>
            <div className='medium media-font-22 bold'>Solar Payment Options</div>
            <div className='space25' />
            <div className='small'>
            BrightSuite offers easy payment options, and the average homeowner can expect thousands in savings and a great return on investment. We get you the best price from local Virginia solar installers. 
            </div>
        </div>

        <div className='flex-center flex-wrap'>
            <div className='cash-option'>
                <div className='most-popular small'>Most Popular</div>
                <div className='flex-align-cen media-font-22 orange medium bold'><img src={solarloan} /> &nbsp;&nbsp;Solar Loan</div>
                <div className='space25' />
                <div className='medium media-font-22'>
                Finance your purchase with affordable monthly payments.
                </div>
                <div className='space25' />
                <ul className='small media-font-14'>
                    <li>Low interest rates.</li>
                    <li>Low monthly loan payment.</li>
                    <li>Maintenance options available.</li>
                    <li>Solar panel and workmanship warranty.</li>
                    <li>Benefit from tax credits and incentives.</li>
                    <li>Solar panel ownership with no upfront cost.</li>
                    <li>Optional battery backup</li>
                    <li>Ownership with no upfront cost.</li>
                </ul>

            </div>

            <div className='cash-option'>
                <div className='flex-align-cen orange media-font-22 medium bold'><img src={cashpurchase} /> &nbsp;&nbsp;Cash Purchase</div>
                <div className='space25' />
                <div className='medium media-font-22'>
                Purchase your solar panels and see immediate monthly savings on your power bill.
                </div>
                <div className='space25' />
                <ul className='small media-font-14'>
                    <li>No monthly payment.</li>
                    <li>Maintenance options available.</li>
                    <li>Solar panel and workmanship warranty.</li>
                    <li>Benefit from tax credits and incentives.</li>
                    <li>Solar panel ownership with no upfront cost.</li>
                    <li>Optional battery backup ownership</li>
                    
                </ul>

            </div>
        </div>

        <div className='review flex-center-col'>
                <div className='heading flex-center-col'>
                <span className='orange xxsmall'>
                    OUR CUSTOMERS SAY
                </span>

                <span className='bold media-font-22 large'>
                    What they're saying?
                </span>

                <span className='grey width-80 center media-font-14 lorem small'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tellus eu turpis sit eget mattis urna.
                </span>
                </div>

                <div className='rating media-flex-center-col flex-speven'>

                    <span className='dark-grey medium media-font-22 bold'>Excellent</span>

                    <img src={rating5s} />

                    <span className='dark-grey media- small'>Based on 786 reviews</span>

                    <div>
                        <img src={trustpilot} />
                    </div>
                
                </div>

                <div className='cus-reviews'>

                <ReviewCard head="They were so helpful and patient" content="Sheryl was so helpful and patient as she helped me navigate medicare plan options and find what is best." name="Maurice C." />

                <ReviewCard head="Matt Gardner was knowledgeable" content="Matt Gardner was knowledgeable about the medicare marketplace and current insurance companies and 2022 plans. He was very helpful getting us the right policy to fit our needs and at the right price." name="Donna L." />

                <ReviewCard head="Great Insurance Agent" content="I talked with a young man named Edis K. to finish my medicare sign-up process. He was amazing to work with on the phone. He walked me through stuff and spelled things out very clearly. He got me set up with just what I wanted: dental, vision and healthcare. Great guy!! Thanks again!" name="Donna L." />

                </div>

            </div>


        <div className="call-land-number flex-center-col">

            <div className='font-40 bold orange'>
            Delhi, DL Pest Exterminator
            </div>
            <div className='medium'>
            Delhi Number 1 Pest Exterminator is just <span className='bold'>One Call Away!</span>
            </div>
            <div className='space25'/>
            <div className='medium'>
            For Fast & Easy, Same-Day Service <br/>Call Now to Get Rid of Those Pesky Pests Today!
            </div>
            <div className='space25' />
            <img src={number} />
            <div className='space25' />
            <div className='flex-spbet'>
                <div className='flex-center'>
                    <img src={tick} /> &nbsp;
                    Zero-Obligation Estimates
                </div>

                <div className='flex-center pad-30'>
                    <img src={tick} /> &nbsp;
                    Trusted & Local
                </div>

                <div className='flex-center'>
                    <img src={tick} /> &nbsp;
                    First Class Customer Service
                </div>
            </div>

        </div>

        <footer>
            <div className="bg-green">
            <img src={footer} className="footer-img" />
            </div>

            <div className='footer-links'>
                <div className='logo'>
                    <img src={logo} /> &nbsp; 
                    <span className='bold orange small'>SOLAR PANEL</span> &nbsp;
                    <span className='orange xxsmall'>Quotes</span>
                </div>
            </div>

            <div className="xxsmall grey footer-dis">
            Pest Exterminators is a free referral service that helps users connect with local service providers. Our service includes a nationwide network of contractors and a 24/7 customer support and dispatch center. All contractors are independent and Pest Exterminators does not endorse or guarantee any work performed. It is the responsibility of the user to verify the contractor they hire has the necessary license and insurance required for the work being performed. Any third party products, brands or trademarks listed above are the sole property of their respective owner. No affiliation or endorsement is intended or implied. All persons depicted are actors or models and not contractors listed on Pest Exterminators.
            </div>
        </footer>
    </div>)
}