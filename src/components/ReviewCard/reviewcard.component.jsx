import React from 'react';
import './reviewcard.stylesheet.css';

const staryellow = '/assets/images/rating5s.svg';

export const ReviewCard = ({head, content, name}) => (
    <div className='review-card'>

        <div>
            <img alt="" src={staryellow} />
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