import React from 'react';
import staryellow from './staryello.png';
import './reviewcard.stylesheet.css';


export const ReviewCard = ({head, content, name}) => (
    <div className='review-card'>

        <div>
            <img src={staryellow} />
            <img src={staryellow} />
            <img src={staryellow} />
            <img src={staryellow} />
            <img src={staryellow} />
        </div>

        <div className='space15'></div>

        <div className='head xsmall bold'>
            {head}
        </div>

        <div className='space15'></div>

        <div className='content xsmall '>
            {content}
        </div>

        <div className='space15'></div>
        
        <div className='name xsmall light-grey'>
            {name}
        </div>

    </div>
)