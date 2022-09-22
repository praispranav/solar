import React from 'react';
import './companycard.stylesheet.css';
import tick from './tick.png';

export const CompanyCard = ({hash, image, rateDis, rate, rating, user, popular}) => {
    return <div className='company-card'>

        {popular === true && (
            <div className='popular'>
                Overall Best Solar Provider
            </div>
        )}

        <div className='hashtag'>#{hash}</div>

        <img src={image} />

        <div className="divider"></div>

        <div className="ratings">
            <div className="large bold orange">{rate}</div>

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
        </div>
    </div>
}