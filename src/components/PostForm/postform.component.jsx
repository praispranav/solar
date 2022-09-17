import React, { useEffect, useState } from 'react';
import './postform.stylesheet.css';
import ellipse from './ellipse.png';
import call from './call.png';
import agent from './agent.png';
import check from './check.png';
import loading from './loading.png';
import location from './location.png';
import user from './user.png';

const load = 0;

const PreLoader = ({name, add}) => {

    

    return <div className='preloader'>

        <div className="large bold orange">Congratulations, We’ve Found Plans in your Area!</div>

            <div id="div1" className='medium'>
                <div>
                    <img src={user} /> &nbsp;
                    {name}
                </div>

                <img src={check} />
            </div>

            <div id="div2" className='medium'>
                <div>
                    <img src={location} /> &nbsp;
                    {add}
                </div>

                <img src={check} />
            </div>

            <div id="div3" className='medium'>
                <div>
                    <img src={agent} /> &nbsp;
                    Connecting you with a licensed agent...
                </div>

                <img src={loading} />
            </div>
        <div className='preloader-details'>

        </div>
    </div>
}

const Post = () => {

    return <div className="post-form flex-center-col">

        <div className="orange media-font-22 large bold">
        Congratulations, {name}!
        </div>

        <div className="space25"></div>

        <div className="small grey">
            You pre-qualify for $2,500 Flex Card plus $0 cost Vision & Dental coverage.
            <br/>
            Call us now to secure your possible additional benefits & flex card.
        </div>

        <div className="space25"></div>

        <div className="call media-font-22 flex-center large bold">
            <div className='calllogo'><img src={call} className="cal" /> <img src={ellipse} /></div>&nbsp; 866-951-5443
        </div>

        <div className="space25"></div>

        <div className='small'>
            Act fast! This application expires in: <span className="bold orange-red">0{min}:{sec > 9? sec : `0${sec}`} minute.</span> 
        </div>

    </div>
}


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
    

        return(
            load? <Post /> : <PreLoader name={name}  />
        )
    }
    }