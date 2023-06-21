import React, {  useState } from "react";
import { useEffect } from "react";
import GridInfo  from './grid/gridInfo';
import { ipDataModel } from '../apiModels/ipDataModel';
import {getIp} from './api/ipApi'
import {getMyIp} from './api/ipApi'

type myIp = {
  country_code: string,
  country_name: string,
  city: string,
  postal: string,
  latitude: string,
  longitude: string,
  IPv4: string,
  state: string,
}

type option = {
  service: string,
}

export default function MainGrid (props: option){                 
  // internal
  const op = props.service;
  var internalIpInfo : ipDataModel = {
    model : {
      ip : "",
      hostname : "",
      type: "",
      continent_code: "",
      continent_name: "",
      country_code: "", 
      country_name: "", 
      region_code : "",
      region_name: "",
      city: "", 
      zip: -1,
      latitude: -1,
      longitude: -1,
      location: {
          geoname_id: -1,
          capital: "",
          country_flag: "", //"https://assets.ipstack.com/images/assets/flags_svg/us.svg",
          country_flag_emoji : "",
          country_flag_emoji_unicode : "",
          calling_code : -1,
          is_eu : false,
          languages :
            {
              code: "", 
              name: "",
              native: "",
            }               
      },
      time_zone : {
          id : "",
          current_time: "",
          gmt_offset : -1,
          code : "",
          is_daylight_saving : false,
      },
      currency : {
          code : "",
          name: "",
          plural : "",
          symbol : "",
          symbol_native : "",
      },
      connection : {
      asn: -1,
      isp: "",
      },
      security : {
          is_proxy : false,
          proxy_type : "",
          is_crawler: "",
          crawler_name: "",
          crawler_type : "",
          is_tor: false,
          threat_level: "",
          threat_types: "",   
      }  
    }
  }             

  // useState
  const [ip,setIP] = useState('')        
  const [dataState, setDataState] = useState() 
  
  // functions
  const getMyIpData = async() =>{
    if(ip === undefined)
    {
      var res = await getMyIp()   
      if(res!== undefined)
        setIP(res.data)
    }
  }
  const getIpData = async(ip_ : string) =>{
    if(ip === undefined)
    {
      var res = await getIp(ip_)   
      if(res!== undefined)
        setIP(res.data)
    }
  }

  // useEffect
  useEffect(()=>{   
    if(op === '')     
      getMyIpData()
    else{
      getIpData(op)
    }    
  },[])
  
  // jsx
  return(
    <div className='text-white w-full h-screen p-10 text-slate-200 bg-slate-700'>                                  
      <div className="rounded list-group p-10 overflow-y-auto w-auto h-auto text-white text-2xl bg-gray-950">                                     
        <div>          
          {
            internalIpInfo.model.ip === "1111" ?
            (
              <div></div>
            )
            :
            (
              <GridInfo                    
                model={internalIpInfo.model}
              ></GridInfo>
            )              
          }
        </div>                 
      </div>
    </div>        
  );
}