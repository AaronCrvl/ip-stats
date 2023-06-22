import React, { useState } from 'react';
import { ipDataModel } from '../../types/ipDataModel';
import Location from './location';
import Security from './security';

export default function GridInfo (props: ipDataModel) {    
    const data = props;        

    return(
        <div>
            <div className="p-3 divide-y divide-solid">
                <div className='flex w-full'>                    
                    <p className='text-8xl text-white font-bold p-3'>{data.ip}</p>                                    
                    <img className='ml-auto h-48 w-72' src={data.location.country_flag}></img>                
                </div>                                  
                <div className='flex mt-5 mb-5 divide-x divide-solid'>                    
                    <p className='text-4xl text-white font-bold p-3 w-1/3'>Hostname: <p className='text-4xl text-white font-light'>{data.hostname === '' ? 'NA': data.hostname}</p></p>
                    <p className='text-4xl text-white font-bold p-3 w-1/3'>Type: <p className='text-4xl text-white font-light'>{data.type}</p></p>                        
                    <p className='text-4xl text-white font-bold p-3 w-1/3'>Adress: <p className='text-4xl text-white font-light'>{data.continent_code + ' - ' + data.continent_name + data.country_name}</p></p>
                </div>  
                <div className='flex mt-5 mb-5 divide-x divide-solid'>                    
                    <p className='text-4xl text-white font-bold p-3 w-1/3'>Region Code: <p className='text-4xl text-white font-light'>{data.region_code}</p></p>
                    <p className='text-4xl text-white font-bold p-3 w-1/3'>Region Name: <p className='text-4xl text-white font-light'>{data.region_name}</p></p>                        
                    <p className='text-4xl text-white font-bold p-3 w-1/3'>City & Zip: <p className='text-4xl text-white font-light'>{data.city + ' - ' + data.zip}</p></p>
                </div>                                  
                <div className='flex'>
                    <div className='w-1/2'>
                        <Location
                            location={data.location}                            
                        />
                    </div>
                    <div className='w-1/2'>
                    <div className='container rounded p-10'>
                        <p className='text-4xl text-white font-bold mb-10'>Security</p>
                        <span className="inline-grid grid-cols-2 gap-4">
                            The request didn't return security information.
                        </span>     
                    </div> 
                    </div>
                </div>                                                                
            </div>                     
        </div>
    )
}