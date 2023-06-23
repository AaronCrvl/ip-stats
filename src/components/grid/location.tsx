import React, { useState } from 'react';
import { useEffect } from 'react';
import { locationType } from '../../types/locationType';    

export default function Location(props: locationType) {
    const data = props;        

    // acess nested properties
    type adressType = locationType["address"]        
    const add: (string | number)[] = []
    const helperAdress = (obj : adressType, arr : any[]) => {
        const values: (string | number)[] = Object.values(obj) 
        values.forEach(val => val && typeof val === "object" ? helperAdress(val, arr) : arr.push(val))
    }

    type boundingboxType = locationType["boundingbox"]
    const boundBx: (string | number)[] = []
    const helperBoundBx = (obj : boundingboxType, arr : any[]) => {
        const values: (string | number)[] = Object.values(obj) 
        values.forEach(val => val && typeof val === "object" ? helperBoundBx(val, arr) : arr.push(val))
    }
    
    helperAdress(data.address, add)
    helperBoundBx(data.boundingbox, boundBx)

    return(        
        <div className='container bg-gray-800 mt-10 w-screen rounded p-10'>
            <div className='text-4xl text-white font-bold mb-10'>Location Details</div>
            <span className="inline-grid w-1/2 grid-cols-2 gap-4">
                <span className='text-white font-bold'>Name: </span><span>{data.display_name}</span>
                <span className='text-white font-bold'>OSM: </span><span>{data.osm_id + ' - ' + data.osm_type}</span>                                
                <span className='text-white font-bold'>Shop:</span><span>{add[0]}</span>
                <span className='text-white font-bold'>Road:</span><span>{add[1]}</span>                          
            </span>     
            <span className="inline-grid w-1/2 grid-cols-2 gap-4">
                <span className='text-white font-bold ml-10'>City:</span><span>{add[2]}</span>                
                <span className='text-white font-bold ml-10'>County:</span><span>{add[3]}</span>                
                <span className='text-white font-bold ml-10'>State:</span><span>{add[4]}</span>                
                <span className='text-white font-bold ml-10'>Country:</span><span>{add[5]}</span>  
            </span>
        </div>   
    )
}