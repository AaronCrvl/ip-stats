import React from 'react';
import { securityType } from '../../types/securityType';

export default function Security() {
    //const data = props.security

    return (
        <div>                   
            <div className='container rounded p-10'>
                <p className='text-4xl text-white font-bold mb-10'>Security</p>
                <span className="inline-grid grid-cols-2 gap-4">
                    The request didn't return security information.
                </span>     
            </div> 
                        
            {/* // <div className='container rounded p-10'>
            //     <p className='text-4xl text-white font-bold mb-10'>Security</p>
            //     <span className="inline-grid grid-cols-2 gap-4">
            //         <span className='text-white font-bold'>Is Proxy?: </span><span>{data.is_proxy}</span>
            //         <span className='text-white font-bold'>Proxy Type: </span><span>{data.proxy_type}</span>
            //         <span className='text-white font-bold'>Is Crawler?: </span><span>{data.is_crawler}</span>
            //         <span className='text-white font-bold'>Crawler Name: </span><span>{data.crawler_name}</span>
            //         <span className='text-white font-bold'>Crawler Type:</span><span>{data.crawler_type}</span>
            //         <span className='text-white font-bold'>Is Tor?:</span><span>{data.is_tor}</span>
            //         <span className='text-white font-bold'>Threat Level:</span><span>{data.threat_level}</span>
            //         <span className='text-white font-bold'>Threat Types:</span><span>{data.threat_types}</span>
            //     </span>     
            // </div>    */}                                
        </div>
    )
}