import React from 'react';
import './companycard.stylesheet.css';
import tick from './tick.png';
import star5 from './5star.png';
import star4 from './4star.png';
import star45 from './4-5star.png';
import call from './call.png';
import editorChoice from './editorchoice.png';
import piggy from './piggy.png';
import service from './service.png';
import allcheck from './allcheck.png';

export const CompanyCard = ({hash, image, rateDis, rate, rating, user, popular, greycard}) => {
    return <div className='company-card'>

        {popular === true && (
            <div className='popular'>
                <div className='relative'>
                    Overall Best Solar Provider

                    <img src={editorChoice} />
                </div>
            </div>
        )}

        {popular? <div className='hashtag yellow'>#{hash}</div> : <div className='hashtag'>#{hash}</div>}

        <img src={image} />

        <div className="divider"></div>

        <div className="ratings">
            <div className="large bold orange">{rate}</div>
            <div className="space10"></div>

            {rate > 9.5 && (
                <img src={star5} />
            )}
            {rate>=9 && rate<=9.5 && (
                <img src={star45} />
            )}
            {rate>=8 && rate<9 && (
                <img src={star4} />
            )}

            <div className="space10"></div>
            <div className="small orange">{rating}</div>

            <div className="xsmall">User Ratings ({user})</div>
        </div>

        <div className="divider"></div>

        <div className="rate-desc">
            <div className="title medium bold orange">{rateDis["title"]}</div>
            <div className="number small">{rateDis["number"]}</div>
            <div className="space10"></div>
            <div className="xxsmall desc">
                {Object.keys(rateDis["desc"]).map(([key, value]) => {
                    return <div>
                        <img src={tick} /> &nbsp;
                        {rateDis["desc"][key]}
                    </div>
                })}
            </div>
        </div>

        <div className="divider"></div>

        <div className="getbutton">
            <div className="company-get-quote">Get Quote</div>

            {popular === true && (
                <img src={call} />
            )}
        </div>

        {greycard === true && (
            <div className="greycard">
                <div>
                    <img src={piggy} alt="" />
                    <div>
                    Flexible solar financing options with as little as $0 up front
                    </div>
                </div>

                <div>
                    <img src={piggy} alt="" />
                    <div>
                    High-quality, professional, local installation
                    </div>
                </div>

                <div>
                    <img src={piggy} alt="" />

                    <div>
                    Complete no-hassle system guarantee
                    </div>
                </div>
            </div>
        )}
    </div>
}