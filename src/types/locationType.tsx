export type locationType = {
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
