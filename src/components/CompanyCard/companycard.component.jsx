import React from 'react';
import './companycard.stylesheet.css';
import tick from './tick.svg';
import star5 from './5star.svg';
import star4 from './4star.svg';
import star45 from './4-5star.svg';
import call from './call.svg';
import editorChoice from './editorchoice.svg';
import piggy from './piggy.svg';
import service from './service.svg';
import allcheck from './allcheck.svg';


export const CompanyCard = ({hash, image, rateDis, rate, rating, user, popular, greycard}) => {
    return <div className='company-card media-flex-center-col'>

        {popular === true && (
            <div className='popular'>
                <div className='relative media-font-16'>
                    Overall Best Solar Provider

                    <img alt="" src={editorChoice} />
                </div>
            </div>
        )}

        {popular? <div className='hashtag yellow media-font-18'>#{hash}</div> : <div className='hashtag media-font-18'>#{hash}</div>}

        <img alt="" src={image} />

        <div className="divider"></div>

        <div className="ratings">
            <div className="large bold orange">{rate}</div>
            <div className="space10"></div>

            {rate > 9.5 && (
                <img alt="" src={star5} />
            )}
            {rate>=9 && rate<=9.5 && (
                <img alt="" src={star45} />
            )}
            {rate>=8 && rate<9 && (
                <img alt="" src={star4} />
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
                        <img alt="" src={tick} /> &nbsp;
                        {rateDis["desc"][key]}
                    </div>
                })}
            </div>
        </div>

        <div className="divider"></div>

        <div className="getbutton">
            <div className="company-get-quote">Get Quote</div>

            {popular === true && (
                <div className='company-call'> <img alt="" src={call} /> &nbsp;&nbsp; Call Now </div>
            )}
        </div>

        {greycard === true && (
            <div className="greycard media-flex-center-col">
                <div className='align-left'>
                    <img alt="" src={piggy}  /> &nbsp;
                    <div>
                    Flexible solar financing options with as little as $0 up front
                    </div>
                </div>
                <div className='media-space20' />
                <div>
                    <img alt="" src={service}  /> &nbsp;
                    <div>
                    High-quality, professional, local installation
                    </div>
                </div>
                <div className='media-space20' />
                <div>
                    <img alt="" src={allcheck}  /> &nbsp;

                    <div>
                    Complete no-hassle system guarantee
                    </div>
                </div>
            </div>
        )}
    </div>
}