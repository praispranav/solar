import React, { useEffect, useState } from 'react';
import './postform.stylesheet.css';
import call from './call.svg';
import agent from './agent.svg';
import check from './check.svg';
import loading from './loading.svg';
import location from './location.svg';
import user from './user.svg';
import company from './company.svg';
import solar from './solar.svg';


let load = 0;

const PreLoader = ({name, add}) => {

    return <div className='preloader'>

        <div className='preloader-details'>

            <div className="large bold orange">Congratulations, We’ve Found Plans in your Area!</div>
            
            <div className='space25' />
            
            <div id="div1" className='medium preload-div'>
                <div>
                    <img src={user} /> &nbsp;
                    {name}
                </div>

                <img src={check} />
            </div>

            <div id="div2" className='medium preload-div border-top'>
                <div>
                    <img src={location} /> &nbsp;
                    {add}
                </div>

                <img src={check} />
            </div>

            <div id="div2" className='medium preload-div border-top'>
                <div>
                    <img src={company} /> &nbsp;
                    Aetna | Blue Cross | Humana | United | Other
                </div>

                <img src={check} />
            </div>

            <div id="div2" className='medium preload-div border-top'>
                <div>
                    <img src={solar} /> &nbsp;
                    New Solar 2022 Quotes
                </div>

                <img src={check} />
            </div>

            <div id="div3" className='medium preload-div border-top'>
                <div>
                    <img src={agent} /> &nbsp;
                    Connecting you with a licensed agent...
                </div>

                <img className='rotat' src={loading} />
            </div>
        </div>
    </div>
}

const Post = ({name, sec, min}) => {

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
            <div className='calllogo'><img src={call} className="cal" /></div>&nbsp; 866-951-5443
        </div>

        <div className="space25"></div>

        <div className='small'>
            Act fast! This application expires in: <span className="bold orange-red">0{min}:{sec > 9? sec : `0${sec}`} minute.</span> 
        </div>

    </div>
}


export const PostForm = ({name, add}) => {

    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(3);

    while(true) {
        setTimeout(function () {    
            if(min === 0 && sec === 0){
                return;
            }
            else if(sec === 0){
                load += 1;
                setMin(min - 1);
                setSec(59);
            }
            else{
                setSec(sec - 1);
            }
        }, 1000)
    

        return(
            load? <Post name={name} sec={sec} min={min} /> : <PreLoader name={name} add={add}  />
        )
    }
}