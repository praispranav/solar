import React from 'react';
import './landing.stylesheet.css';
import light from '../PreForm/light.svg';
import {useNavigate} from 'react-router-dom';
import im1 from './image1.svg';
import im2 from './image2.svg';
import im3 from './image3.svg';
import im4 from './image4.svg';
import house from './house.svg';
import fullservice from './fullservice.svg';
import savemore from './samemore.svg';
import financing from './financing.svg';
import gogreen from './gogreen.svg';
import solarloan from './solar-loan.svg';
import cashpurchase from './cash-purchase.svg';


export const Landing = ({preForm, setPreForm}) => {
    const navigate = useNavigate();

    const pre = () => {
        navigate("/form");
    }

    return(<div className="landing flex-center-col">
        <div className="lander flex-center-col">

            <img src={light} />
            <div className='space25' />
            <div className='xlarge media-font-22 bold'>
                Switch To Solar Power &  Start <span className='orange'>Saving</span> On Electricity Bills!
            </div>
            <div className='space25' />
            <div className='small media-font-14'>Enter your ZIP Code to get a free report on solar savings & financing options.</div>
            <div className='space25' />
            <div className='flex-center'>
                <form className='flex-center flex-wrap' onSubmit={pre}>
                <input required type="number" className='lander-input' placeholder='Enter ZIP code' />
                <button className='lander-button'>Get Free Quote</button>
                </form>
            </div>
        
        </div>

        <div className='branding'>

            <div className='flex-spbet flex-wrap-img'>
                <img src={im1} />
                <img src={im2} />
                <img src={im3} />
                <img src={im4} />
            </div>
            <div className='space25' />
            <div className='space25' />
            <div className="xsmall media-font-12 orange">VIRGINIA'S HOME SOLAR SOLUTION</div>
            <div className='space25' /> 
            <div className="bold medium media-font-22">
                Backed By Brands You Can Trust
            </div>
            <div className='space25' />
            <div className="small media-font-14">
            BrightSuite is Virginia’s one-stop-shop for renewable energy. Curious about what a residential solar panel system actually costs and how much it will save on your electric bill? Speak to our experts and get a comprehensive solar proposal to see your return on investment timeline. Learn if your roof qualifies for solar, along with the best home solar panels, installation, financing, and maintenance for your home.
            </div>

        </div>

        <div className='features'>

            <div>
                <img src={fullservice} />
                <div className='space20' />
                <div className='medium bold'>Full Service</div>
                <div className='space20' />
                <div>
                From vetting residential solar installers to approving system designs to financing your system, we’ll be with you every step of the way.
                </div>
            </div>

            <div>
                <img src={savemore} />
                <div className='space20' />
                <div className='medium bold'>Save More</div>
                <div className='space20'></div>
                <div>
                Our pre-screened solar panel installers compete for your business ensuring you get the right system for the best price.
                </div>
            </div>

            <div>
                <img src={financing} />
                <div className='space20' />
                <div className='medium bold'>Financing</div>
                <div className='space20'></div>
                <div>
                No hidden fees. No bait and switch. We’ve cleaned up clean energy financing for Virginia homeowners and businesses.
                </div>
            </div>

            <div>
                <img src={gogreen} />
                <div className='space20' />
                <div className='medium bold'>Go Green</div>
                <div className='space20'></div>
                <div>
                Take advantage of Virginia solar incentives and earn credits on your electric bill. Help the environment and increase your home’s value with its own solar power system.
                </div>
            </div>

        </div>

        <div className='details flex-center-col'>

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

        <div className='flex-center your-choice'>

            <img src={house} width="500px" />

            <div className='flex-col-align-cen inside-float-left'>
                <div className='orange text-center media-font-12 xsmall'>Safe Solar Financing for Virginians</div>
                <div className='space25' />
                <div className='bold medium media-font-22'>
                Your Power. Your Choice.
                </div>
                <div className='space25' />
                <div className='small'>
                BrightSuite is a local Virginia solar company that provides you with options when it comes to paying for renewable energy. From cash purchases to loans to tax credits, you’ll get all the information you need to make a smart solar decision when it comes to buying solar panels.

                </div>

            </div>
        </div>

        <div className='flex-center-col payment-option'>
            <div className='medium media-font-22 bold'>Solar Payment Options</div>
            <div className='space25' />
            <div className='small'>
            Rising energy costs and falling equipment costs are making it easy for homeowners to justify owning their own solar power systems. BrightSuite offers easy payment options, and the average homeowner can expect thousands in savings and a great return on investment. We get you the best price from local Virginia solar installers. 
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

        <div className='flex-center-col home-solution'>
            <div className='orange xsmall'>Virginia’s Home Solar Solution</div>
            <div className='space25' />
            <div className='medium bold'>
            We’re Bringing Solar Power To Virginia
            </div>
            <div className='space25' />
            <div className='small align-left'>
                BrightSuite is a local solar installation company based and fully staffed right here in Richmond, Virginia. Our local team of installers serves the entire state including Northern Virginia, Hampton Roads, Charlottesville, and Roanoke.
                <br/><br/>
                We’ve installed solar panels for homeowners, businesses, and schools across our beautiful state and pride ourselves on quality service, workmanship, and products.
            </div>

        </div>

        <div className='small media-font-14 grey padding-w12 margin-bot-70'>
        BrightSuite is an unregulated affiliate of Dominion Energy but is not the same company. BrightSuite’s services are not regulated by a state’s Public Service Commission. Your choice of whether to participate in any BrightSuite offerings will not affect the price, availability, or terms of service from a Dominion Energy regulated utility and shall receive no preference or special treatment. A customer does not have to select BrightSuite services to continue to receive the same safe and reliable electric service or natural gas service from Dominion Energy.
        </div>


    </div>)
}