import React, { useState } from 'react';
import { useEffect } from 'react';
import { ipDataModel } from '../../apiModels/ipDataModel';
import  Flag_of_Brazil  from '../../img/Flag_of_Brazil.png'
import Location from './location';
import Security from './security';

export default function GridInfo (props: ipDataModel) {    
    const data = props;        

    return(
        <div>
            <div className="p-3 divide-y divide-solid">
                <div className='flex w-full'>                    
                    <p className='text-8xl text-white font-bold p-3'>Ip</p>                                    
                    <img className='ml-auto h-48 w-72' src={Flag_of_Brazil}></img>                
                </div>                                  
                <div className='flex mt-5 mb-5'>
                    <p className='text-4xl text-white p-3'>Hostname: </p>
                    <p className='text-4xl text-white p-3'>Type: </p>                        
                    <p className='text-4xl text-white p-3'>Adress: </p>
                </div>                                  
                <div className='flex'>
                    <div className='w-1/2'>
                        <Location
                            location={data.model.location}
                        />
                    </div>
                    <div className='w-1/2'>
                        <Security
                            security={data.model.security}
                        />
                    </div>
                </div>                                                                
            </div>                     
        </div>
    )
}