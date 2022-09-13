import React, { useEffect, useState } from 'react';
import './postform.stylesheet.css';
import ellipse from './ellipse.png';
import call from './call.png';


export const PostForm = ({name}) => {

    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);

    while(true) {
        setTimeout(function () {    
            if(min === 0 && sec === 0){
                return;
            }
            else if(sec === 0){
                setMin(min - 1);
                setSec(59);
            }
            else{
                setSec(sec - 1);
            }
        }, 1000)
    

    return(<div className="post-form flex-center-col">

        <div className="orange large bold">
        Congratulations, {name}!
        </div>

        <div className="space25"></div>

        <div className="small grey">
            You pre-qualify for $2,500 Flex Card plus $0 cost Vision & Dental coverage.
            <br/>
            Call us now to secure your possible additional benefits & flex card.
        </div>

        <div className="space25"></div>

        <div className="call flex-center large bold">
            <div className='calllogo'><img src={call} className="cal" /> <img src={ellipse} /></div>&nbsp; 866-951-5443
        </div>

        <div className="space25"></div>

        <div>
            Act fast! This application expires in: <span className="bold orange-red">0{min}:{sec > 9? sec : `0${sec}`} minute.</span> 
        </div>

    </div>
)}
    }