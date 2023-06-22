import React, { useState } from 'react';
import { useEffect } from 'react';
import { locationType } from '../../types/locationType';

type langs = {
    code: string 
    name: string
    native: string
}     

export default function Location(props: locationType) {
    const data = props.location;        

    // acess nested properties
    type langType = locationType["location"]["languages"];        
    const langs: any[] = [];
    const helper = (obj : langType) => {
        const values: string[] = Object.values(obj) 
        values.forEach(val => val && typeof val === "object" ? helper(val) : langs.push(val))
    }
    helper(data.languages)

    return(        
        <div className='container rounded p-10'>
            <div className='text-4xl text-white font-bold mb-10'>Location</div>
            <span className="inline-grid grid-cols-2 gap-4">
                <span className='text-white font-bold'>Geoname Id: </span><span>{data.geoname_id}</span>
                <span className='text-white font-bold'>Capital: </span><span>{data.capital}</span>
                <span className='text-white font-bold'>Calling Code: </span><span>{data.calling_code}</span>
                <span className='text-white font-bold'>Is Eu?: </span><span>{data.is_eu === false ? 'True' : 'False'}</span>
                <span className='text-white font-bold'>Langugue Code:</span><span>{langs[0]}</span>
                <span className='text-white font-bold'>Langugue Name:</span><span>{langs[1]}</span>
                <span className='text-white font-bold'>Language Native:</span><span>{langs[2]}</span>                
            </span>     
        </div>   
    )
}