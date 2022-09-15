import React from 'react';
import './landing.stylesheet.css';
import light from '../PreForm/light.png';

import im1 from './image1.png';
import im2 from './image2.png';
import im3 from './image3.png';
import im4 from './image4.png';
import house from './house.png';


export const Landing = () => {

    return(<div className="landing">
        <div className="lander flex-center-col">

            <img src={light} />
            <div className='space25' />
            <div className='xlarge bold'>
                Switch To Solar Power &  Start <span className='orange'>Saving</span> On Electricity Bills!
            </div>
            <div className='space25' />
            <div className='small'>Enter your ZIP Code to get a free report on solar savings & financing options.</div>
            <div className='space25' />
            <div className='flex-center'>
                <input type="text" className='lander-input' placeholder='Enter ZIP code' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='lander-button'>Get Free Quote</button>
            </div>
        
        </div>

        <div className='branding'>

            <div className='flex-spbet'>
                <img src={im1} />
                <img src={im2} />
                <img src={im3} />
                <img src={im4} />
            </div>
            <div className='space25' />
            <div className='space25' />
            <div className="xsmall orange">VIRGINIA'S HOME SOLAR SOLUTION</div>
            <div className='space25' /> 
            <div className="bold medium">
                Backed By Brands You Can Trust
            </div>
            <div className='space25' />
            <div className="small">
            BrightSuite is Virginia’s one-stop-shop for renewable energy. Curious about what a residential solar panel system actually costs and how much it will save on your electric bill? Speak to our experts and get a comprehensive solar proposal to see your return on investment timeline. Learn if your roof qualifies for solar, along with the best home solar panels, installation, financing, and maintenance for your home.
            </div>

        </div>

        <div className='flex-center your-choice'>

            <img src={house} width="500pxx" />

            <div className='flex-col-align-cen inside-float-left'>
                <div className='orange xsmall'>Safe Solar Financing for Virginians</div>

                <div className='bold medium'>
                Your Power. Your Choice.
                </div>

                <div className='small'>
                BrightSuite is a local Virginia solar company that provides you with options when it comes to paying for renewable energy. From cash purchases to loans to tax credits, you’ll get all the information you need to make a smart solar decision when it comes to buying solar panels.

                </div>

            </div>
        </div>

    </div>)
}