import React, { useState } from 'react';

type locationType = {
    location: {
        geoname_id: number
        capital: string
        country_flag: string //"https://assets.ipstack.com/images/assets/flags_svg/us.svg",
        country_flag_emoji : string
        country_flag_emoji_unicode : string
        calling_code : number
        is_eu : boolean
        languages :
            {
                code: string 
                name: string
                native: string
            }               
    }   
}

export default function Location(props: locationType) {
    const data = props;
    const [ipInfo, setIpInfo] = useState(data)

    return(        
        <div className='container rounded p-10'>
            <p className='text-4xl text-white font-bold mb-10'>Location</p>
            <span className="inline-grid grid-cols-2 gap-4">
                <span className='text-white font-bold'>Geoname Id: </span><span>02</span>
                <span className='text-white font-bold'>Capital: </span><span>02</span>
                <span className='text-white font-bold'>Calling Code: </span><span>02</span>
                <span className='text-white font-bold'>Is Eu?: </span><span>02</span>
                <span className='text-white font-bold'>Langugue Code:</span><span>02</span>
                <span className='text-white font-bold'>Langugue Name:</span><span>02</span>
                <span className='text-white font-bold'>Language Native:</span><span>02</span>                
            </span>     
        </div>   
    )
}