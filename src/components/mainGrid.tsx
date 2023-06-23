import React, {  useState } from "react";
import { useEffect } from "react";
import GridInfo  from './grid/gridInfo';
import { ipDataModel } from '../types/ipDataModel';
import { myIp } from '../types/myIp';
import {getIp} from './api/ipApi'
import {getMyIp} from './api/ipApi'
import loadingIcon from '../img/loadingIcon.png';

type option = {
  service: string,
}

export default function MainGrid (props: option){                 
  // internal
  const op = props.service;          

  // useState
  var [ip,setIP] = useState <ipDataModel | undefined>(undefined)  
  const [showIpPage, setShow] = useState(false)
  const [myIp, setMyIP] = useState <myIp>()    
  const [mainIp, setMainIp] = useState(false)
  
  // functions
  // function delay(delay: number) {
  //   return new Promise(r => {
  //       setTimeout(r, delay);
  //   })
  // }

  const getMyIpData = async() =>{
    if(ip === undefined)
    {
      var res = await getMyIp()   
      if(res!== undefined)        
        setMyIP(res)
    }
    
    if(myIp !== undefined)
      getIpData(myIp.IPv4)
  }

  const getIpData = async (ip_ : string) =>{
    if(ip === undefined)
    {      
      setIP(await getIp(ip_).then((res) => {return res}))                    
      setShow(true)
    }    
  }

  const getMyIpInfo = () =>{
    if(myIp !== undefined)
    {
      getIpData(myIp.IPv4)
    }
  }

  // useEffect
  useEffect(()=>{   
    if(op === "")    
    {
      if(myIp === undefined) 
        getMyIpData()
    }
    else{      
      if(ip === undefined)         
        getIpData(op)
    }    
  })

  // on ip change
  useEffect(() => {
    if(ip !== undefined)
      setMainIp(true)
  }, [ip])
  
  // on myIp change
  useEffect(() => {
    if(myIp !== undefined)      
      setMainIp(true)
      getMyIpInfo()
  }, [myIp])
  
  // tsx
  return(
    <div className='text-white w-full p-10 text-slate-200 bg-slate-700'>                                  
      <div className="rounded h-auto list-group p-10 w-auto text-white text-2xl bg-gray-950">                                     
        <div className="w-full">          
          {
            showIpPage?
            (
              ip && mainIp ?
              (
                <GridInfo                    
                  status={ip.status}     
                  continent={ip.continent}
                  continentCode={ip.continentCode}
                  country={ip.country}
                  countryCode={ip.countryCode}
                  region={ip.region}
                  regionName={ip.regionName}
                  city={ip.city}
                  district={ip.district}
                  zip={ip.zip}
                  lat={ip.lat}
                  lon={ip.lon}
                  timezone={ip.timezone}
                  offset={ip.offset}
                  currency={ip.currency}
                  isp={ip.isp}
                  org={ip.org}
                  as={ip.as}
                  asname={ip.asname}
                  reverse={ip.reverse}
                  mobile={ip.mobile}
                  proxy={ip.proxy}
                  hosting={ip.hosting}
                  query={ip.query}
                ></GridInfo>
              )
              :              
              (
                <div className="w-full">                                 
                </div>
              )
            )  
            :
            (
              <div className="w-full h-screen">               
                <img className="h-24 w-24 ml-auto mr-auto mt-10 animate-spin" src={loadingIcon}></img>
              </div>         
            )                                    
          }
        </div>                 
      </div>
    </div>        
  );
}