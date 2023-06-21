import React from 'react';

type securityType = {
    security : {
        is_proxy : boolean
        proxy_type : string
        is_crawler: string
        crawler_name: string
        crawler_type : string
        is_tor: boolean
        threat_level: string
        threat_types: string   
    } 
}

export default function Security(props: securityType) {
    return (
        <div className='container rounded p-10'>
            <p className='text-4xl text-white font-bold mb-10'>Security</p>
            <span className="inline-grid grid-cols-2 gap-4">
                <span className='text-white font-bold'>Is Proxy?: </span><span>02</span>
                <span className='text-white font-bold'>Proxy Type: </span><span>02</span>
                <span className='text-white font-bold'>Is Crawler?: </span><span>02</span>
                <span className='text-white font-bold'>Crawler Name: </span><span>02</span>
                <span className='text-white font-bold'>Crawler Type:</span><span>02</span>
                <span className='text-white font-bold'>Is Tor?:</span><span>02</span>
                <span className='text-white font-bold'>Threat Level:</span><span>02</span>
                <span className='text-white font-bold'>Threat Types:</span><span>02</span>
            </span>     
        </div>   
    )
}