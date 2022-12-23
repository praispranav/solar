import $ from "jquery";
import { useEffect, useState } from "react";
import { sessionStorageKeys } from "../constants/localStorage";
import { RINGBA_SCRIPT_ID } from "../constants/ringba";
import { useSearchParams } from "react-router-dom";
import { useRingbaUser } from "../constants/ringba";
import { RINGBA_COM_TAGS } from "../constants/ringba"
import Cookies from "js-cookie";

export const CLICK_ID = "vl-cid"

export function useRgbaHook() {
  const storeRgbaData = (key, value) => {
    if(key === 'click_id' && sessionStorage.getItem(sessionStorageKeys.isClickIdSent)) return 
    if(key === 'click_id') sessionStorage.setItem(sessionStorageKeys.isClickIdSent, "true")
    
    let rgbaPattern = { [key]: value || "" };
    if(key === 'generator') rgbaPattern = { [key]: value || RINGBA_COM_TAGS[0].user };
    if (Array.isArray(window._rgba_tags)) {
      window._rgba_tags.push(rgbaPattern);
    } else {
      window._rgba_tags = [rgbaPattern];
    }
  };
  return { storeRgbaData };
}

export function useInitRingba() {
  const [history, setHistory] = useSearchParams();
  const ringbaKey = useRingbaUser(history);
  const [num, setNum] = useState();
  const [clickId, setClickId] = useState()

    $(document).ready(function ($) {
      (function (e, d) {
        //Ringba.com phone number tracking
        var ringba_com_tag = ringbaKey.key;

        var _sc = d.getElementsByTagName("script"),
          _s = _sc[_sc.length - 1];
        e._rgba = e._rgba || { q: [] };
        e._rgba.q.push({
          tag: ringba_com_tag,
          cb: GetNumber,
          render: false,
          script: _s,
        });
        if (!(e._rgba.loading = !!e._rgba.loading)) {
          var sc = d.createElement("script");
          sc.id = RINGBA_SCRIPT_ID;
          sc.type = "text/javascript";
          sc.async = true;
          sc.src = "//js.callcdn.com/js_v3/min/ringba.com.js";
          var s = d.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(sc, s);
          e._rgba.loading = true;
        }
      })(window, document);
      function GetNumber(number, tagId, firstTime) {
        window.pnumber = number;
        setNum(number);
        // const urlParams = new URLSearchParams(window.location.search);
        // const generator_var = urlParams.get('generator');
        // const type_var = urlParams.get('type');
        // const device_var = urlParams.get('device');
        // const fbclid_var = urlParams.get('fbclid');
        // const gclid_var = urlParams.get('gclid');
        // const interest_var = urlParams.get('interest');
        // const utm_medium_var = urlParams.get('utm_medium');
        // const language_var = urlParams.get('language');
        // const utm_source_var = urlParams.get('utm_source');
        //const click_id_var = click_id_store;
        // const click_id_var = clickId
        // var obj = { click_id: click_id_var};
        
        
        $("#form-end-contact").attr("href", "tel://" + window.pnumber);
        $("#font-end-contact-number").text(window.pnumber);
        // $("a#landerclick").attr("href", "https://quotes.qualifybenefits.co/?" + $.param(obj));
      }

      window._rgba_tags = window._rgba_tags || [];
      

      $(".callnow").click(function () {
        window.fbqFunc("track", "Contact");
      });
    });

  useEffect(()=>{
      setClickId(Cookies.get(CLICK_ID))
  },[Cookies.get(CLICK_ID)])

    const setInitialValue = () =>{
    }

  return { number: num, staticNumber: ringbaKey.number, setInitialValue, clickId };
}