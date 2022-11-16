import React from 'react';
import './preform.stylesheet.css';
import light from './light.svg';


export const PreForm = ({showForm, setShowForm}) => (
    <div className='preform flex-center-col'>

        <img alt="" src={light} />

        <div className='space25'></div>

        <div className='bold large media-font-22'>
            NEW MEDICARE BENEFITS UPDATE
        </div>

        <div className='space25'></div>

        <div className='quote medium media-font-14 orange center'>
            Americans Ages 65+ In Rajasthan Have 10 days to claim additional benefits & get up to $240 monthly in OTC benefits
        </div>

        <div className='space25'></div>

        <div className='quote media-font-14 small'>
            Thanks to a new Medicare Advantage package, Americans age 65+ could get $148.50* monthly added to their social security check with No-Cost Vision & Dental Benefits.
        </div>

        <div className='space25'></div>

        <button className='qualify-button media-font-22 medium' onClick={() => {setShowForm(true)}}>See If You Qualify</button>
    </div>
)