import React from 'react';
import './landing.stylesheet.css';
import light from '../PreForm/light.png';

export const Landing = () => {

    return(<div className="landing">
        <div className="lander flex-center-col">

            <img src={light} />

            <div className='large bold'>
                Switch To Solar Power &  Start Saving On Electricity Bills!
            </div>

            <div className='xxsmall'>Enter your ZIP Code to get a free report on solar savings & financing options.</div>

            <div>
                <input type="text" />
                <button>Get Free Quote</button>
            </div>
        
        </div>

        <div>
            
            <div className="xsmall orange">VIRGINIA'S HOME SOLAR SOLUTION</div>

            <div className="bold medium">
                Backed By Brands You Can Trust
            </div>

            <div className="small">
            BrightSuite is Virginia’s one-stop-shop for renewable energy. Curious about what a residential solar panel system actually costs and how much it will save on your electric bill? Speak to our experts and get a comprehensive solar proposal to see your return on investment timeline. Learn if your roof qualifies for solar, along with the best home solar panels, installation, financing, and maintenance for your home.
            </div>

        </div>

    </div>)
}