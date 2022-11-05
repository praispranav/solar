import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Cookies from "js-cookie";

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
                    {Cookies.get("full_name")}
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

const Post = ({number, name, sec, min}) => {

    return <div className="post-form flex-center-col">

        <div className="orange media-font-22 large bold">
        Congratulations, {Cookies.get("full_name")}!
        </div>

        <div className="space25"></div>

        <div className="small grey">
            You pre-qualify for $2,500 Flex Card plus $0 cost Vision & Dental coverage.
            <br/>
            Call us now to secure your possible additional benefits & flex card.
        </div>

        <div className="space25"></div>

        <a href={`tel:+${number}`} className="call media-font-22 flex-center large bold">
            <div className='calllogo'><img src={call} className="cal" /></div>&nbsp; {number}
        </a>

        <div className="space25"></div>

        <div className='small'>
            Act fast! This application expires in: <span className="bold orange-red">0{min}:{sec > 9? sec : `0${sec}`} minute.</span> 
        </div>

    </div>
}


export const PostForm = ({name, add}) => {

    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(3);
    const [num, setNum] = useState();

    useEffect(()=>{
        $(document).ready(function ($) {
            (function(e, d) {
            //Ringba.com phone number tracking
            var ringba_com_tag="JS287f9e234b394dd6b7e29e2f6b98091c";
            var _sc = d.getElementsByTagName('script'), _s = _sc[_sc.length - 1];
            e._rgba = e._rgba || { q: [] }; e._rgba.q.push({ tag: ringba_com_tag, cb: GetNumber, render: false, script: _s });
            if (!(e._rgba.loading = !!e._rgba.loading)) {
                var sc = d.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
                sc.src = '//js.callcdn.com/js_v3/min/ringba.com.js';
                var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
                e._rgba.loading = true;
            }
            })(window, document);
            function GetNumber(number, tagId, firstTime) {
                window.pnumber = number;
                setNum(number);
                $("#form-end-contact").attr("href", "tel://" + window.pnumber);
                $("#font-end-contact-number").text(window.pnumber);
            }
            (window._rgba_tags = (window._rgba_tags || [])).push({userIp:Cookies.get('userIp')},{user_agent:Cookies.get('user_agent')},{zip:Cookies.get('zip')},{city:Cookies.get('city')},{state:Cookies.get('state')},{firstName:Cookies.get('firstName')},{lastName:Cookies.get('lastName')},{email:Cookies.get('email')},{lead_id:Cookies.get("JornayaToken")});
            $('.callnow').click(function() {window.fbqFunc('track', 'Contact');});
        });
    })

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
            load? <Post number={num} name={name} sec={sec} min={min} /> : <PreLoader name={name} add={add}  />
        )
    }
}