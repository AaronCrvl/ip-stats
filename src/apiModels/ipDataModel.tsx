export type ipDataModel = {   
    model : { 
        ip: string
        hostname: string
        type: string
        continent_code: string
        continent_name: string
        country_code: string 
        country_name: string 
        region_code : string
        region_name: string
        city: string 
        zip: number
        latitude: number
        longitude: number
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
        time_zone : {
            id : string
            current_time: string
            gmt_offset : number
            code : string
            is_daylight_saving : boolean
        }
        currency : {
            code : string
            name: string
            plural : string
            symbol : string
            symbol_native : string
        },
        connection : {
            asn: number
            isp: string
        },
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
}
