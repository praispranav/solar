import React from 'react';
import { CompanyCard } from '../CompanyCard/companycard.component';
import './companycomparision.stylesheet.css';
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import image4 from './image4.svg';
import image5 from './image5.svg';

export const CompanyComparision = () => {

    const rateDis = {
        1 : {
            title: "Evolve Solar",
            number : "844-530-8904",
            desc: {
                1 : "Flexible solar financing options with as little as $0 up front",
                2 : "High-quality, professional, local installation",
                3 : "24/7 desktop, tablet, and smartphone system monitoring",
                4 : "Complete no-hassle system guarantee"
            }
        },
        2 : {
            title: "Solar Energy World",
            number : "",
            desc: {
                1 : "Flexible financing options.",
                2 : "Solar systems uniquely made for every customer’s home.",
                3 : "All construction is done by Solar Energy World employees."
            }
        },
        3 : {
            title: "Horizon Solar Power",
            number : "",
            desc: {
                1 : "Free solar panel installation with $0 upfront.",
                2 : "Lock in a rate for 20 years.",
                3 : "30% savings from the moment your system starts producing."
            }
        },
        4 : {
            title: "SolarMax",
            number : "",
            desc: {
                1 : "Get financing directly from SolarMax.",
                2 : "Everything’s in-house, from designers to installers and consultants",
                3 : "10 year installation warranties."
            }
        },
        5 : {
            title: "Momentum Solar",
            number : "",
            desc: {
                1 : "Low or zero upfront costs",
                2 : "Complementary tree removal (if needed)",
                3 : "Paid referral program for finding new customers"
            }
        }
    }

    return <div className='company-comparision'>

        <div className='company-comparision-main'>
            <div className='bold large media-font-22'>
            Top 5 Residential Solar Providers
            </div>

            <div className='orange media-font-22 medium'>
            April 2022 Ratings
            </div>
        </div>

        <div className="company-comparision-review">
            <CompanyCard hash="1" image={image1} popular={true} rateDis={rateDis["1"]} rate="9.9" rating="BEST OF THE BEST" user="3327" />

            <CompanyCard hash="2" image={image2} rateDis={rateDis["2"]} rate="9.1" rating="EXCELLENT" user="3327" />

            <CompanyCard hash="3" image={image3} rateDis={rateDis["3"]} rate="9.0" rating="VERY GOOD" user="3327" />

            <CompanyCard hash="4" image={image4} rateDis={rateDis["4"]} rate="8.6" rating="GOOD" user="3327" />

            <CompanyCard hash="5" image={image5} rateDis={rateDis["5"]} rate="8.2" rating="GOOD" user="3327" />


            <div className="horizontal-divider"></div>

            <div className="space50"></div>

            <CompanyCard hash="1" image={image1} greycard={true} popular={true} rateDis={rateDis["1"]} rate="9.9" rating="BEST OF THE BEST" user="3327" />

            <div className="space25 space150"></div>
        </div>

    </div>
}