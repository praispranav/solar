import React from 'react';
import staryellow from '../../assets/rating5s.svg';
import './reviewcard.stylesheet.css';


export const ReviewCard = ({head, content, name}) => (
    <div className='review-card'>

        <div>
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