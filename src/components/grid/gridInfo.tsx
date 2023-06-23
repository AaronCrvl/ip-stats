import React, { useState } from 'react';
import { useEffect } from 'react';
import { ipDataModel } from '../../types/ipDataModel';
import { locationType } from '../../types/locationType';
import Location from './location';
import {getGeolocationInfo} from '../api/ipApi';

export default function GridInfo (props: ipDataModel) {    
    // props
    const data = props
    const [location, setLocation] = useState<locationType | undefined>(undefined)
    const [isLocationSetted, setLocationSetted] = useState(false)

    // useState
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)

    // useEffect
    useEffect(() => {
        if(location !== undefined) {
            setLocationSetted(true)
        }
    },[location])

    // functions
    const handleMainTab = () => {
        setTab1(true)
        setTab2(false)
    }
    const handleLocationDetailsTab = async () => {        
        if(location === undefined) {
            let res = await getGeolocationInfo(data.lat, data.lon).then(data => {return data})
            setLocation(res)                    
        }

        setTab1(false)
        setTab2(true)
    }
    const handleTabChange = (tab : number) =>{
        switch (tab)
        {
            case 1:
                handleMainTab()
                break;

            case 2:
                handleLocationDetailsTab()
                break;                    

            default:
                break;
        }    
    }

    // tsx
    return(
        <div className=''>            
            <div className="p-3">
                <div className='divide-y divide-solid'>
                    <div className='flex w-full'>                    
                        <p className='text-8xl text-white font-bold p-3'>{data.query}</p>                                    
                        <img className='ml-auto h-48 w-48' src={`https://flagsapi.com/${data.countryCode}/shiny/64.png`}></img>
                    </div>                                  
                    <div className='flex p-2 divide-x divide-solid'>             
                        <div className='w-1/2 p-3'>
                            <div className="group relative flex justify-left">
                                <button className="rounded bg-amber-500 px-4 h-10 text-xl font-bold text-white shadow-sm">i</button>
                                <span className="absolute top-10 scale-0 rounded bg-gray-800 p-1 text-xl font-bold text-white group-hover:scale-100">AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables.</span>                                                         
                            </div>  
                            <p className='text-4xl text-white font-bold p-1'>
                                As:<p className='text-4xl text-white font-light'>{data.as}</p>                            
                            </p>
                        </div>
                        <div className='w-1/2 p-3'>
                            <div className="group relative flex justify-left">
                                <button className="rounded bg-amber-500 px-4 h-10 text-xl font-bold text-white shadow-sm">i</button>
                                <span className="absolute top-10 scale-0 rounded bg-gray-800 p-1 text-xl font-bold text-white group-hover:scale-100">AS name (RIR). Empty for IP blocks not being announced in BGP tables.</span>                                                                                                               
                            </div>  
                            <p className='text-4xl text-white font-bold p-3 w-1/2'>As Name: <p className='text-4xl text-white font-light'>{data.asname}</p></p>                                            
                        </div>
                    </div>  
                    <div className='flex mt-5 mb-5 divide-x divide-solid'>                                        
                        <p className='text-4xl text-white font-bold p-3 w-1/2'>Latitude: <p className='text-4xl text-white font-light'>{data.lat}</p></p>
                        <p className='text-4xl text-white font-bold p-3 w-1/2'>Longitude: <p className='text-4xl text-white font-light'>{data.lon}</p></p>                                            
                    </div>                 
                </div>
                <div className='flex mt-16 w-full'>
                    <ul className='flex'>
                        <li 
                            className='text-4xl text-gray-500 select-none capitalize underline underline-offset-8 hover:text-white'
                            onClick={()=>handleTabChange(1)}
                        >
                            main
                        </li>
                        <li 
                            className='text-4xl text-gray-500 select-none capitalize underline underline-offset-8 ml-20 hover:text-white'
                            onClick={()=>handleTabChange(2)}
                        >
                            location details
                        </li>                        
                    </ul>
                </div>  
                <div className='flex bg-gray-800 mt-10'>         
                {      
                    tab1 ?
                    (
                        <>
                        <div className='w-1/2'>
                            <div className='container rounded p-10'>
                                <div className='text-4xl text-white font-bold mb-10'>Info</div>
                                <span className="inline-grid grid-cols-2 gap-4">
                                    <span className='text-white font-bold'>Continent: </span><span>{data.continentCode + ' - ' + data.continent}</span>
                                    <span className='text-white font-bold'>Country Code: </span><span>{data.countryCode}</span>
                                    <span className='text-white font-bold'>Conuntry:</span><span>{data.country}</span>
                                    <span className='text-white font-bold'>Region: </span><span>{data.region}</span>
                                    <span className='text-white font-bold'>Region Name: </span><span>{data.regionName}</span>                                                   
                                    <span className='text-white font-bold'>City & Zip:</span><span>{data.city + ' - ' + data.zip}</span>                                                                                                                    
                                </span>     
                            </div>  
                        </div>
                        <div className='w-1/2'>
                            <div className='container rounded p-10'>
                                <div className='text-4xl text-white font-bold mb-10'>Details</div>
                                <span className="inline-grid grid-cols-2 gap-4">
                                    <span className='text-white font-bold'>Offset: </span><span>{data.offset}</span>
                                    <span className='text-white font-bold'>Currency:</span><span>{data.currency}</span>
                                    <span className='text-white font-bold'>Is Mobile?: </span><span>{data.mobile ? 'Yes': 'No'}</span>
                                    <span className='text-white font-bold'>Is Proxy?: </span><span>{data.proxy ? 'Yes': 'No'}</span>                                                   
                                    <span className='text-white font-bold'>Is Hosting?:</span><span>{data.hosting ? 'Yes': 'No'}</span>                                                                                                             
                                </span>     
                            </div>  
                        </div>                        
                        </>
                    )
                    :
                    (
                        <div></div>
                    )                    
                }    
                {
                    tab2 && location && isLocationSetted ?
                    (
                        <Location
                            place_id={location.place_id}
                            licence={location.licence}
                            powered_by={location.powered_by}
                            osm_type={location.osm_type}
                            osm_id={location.osm_id}
                            lat={location.lat}
                            lon={location.lon}
                            display_name={location.display_name}
                            address={location.address}
                            boundingbox={location.boundingbox}
                        />
                    )
                    :
                    (
                        <div></div>
                    )
                }    
                </div>                                                        
            </div>                     
        </div>
    )
}