export type locationType = {
    place_id: number,
    licence: string,
    powered_by: string,
    osm_type: string,
    osm_id: string,
    lat: number,
    lon: number,
    display_name: string,
    address: {
        shop: string,
        road: string,
        city: string,
        county: string,
        state: string,
        postcode: number,
        country: string,
        country_code: string,
    },
    boundingbox: [
        first: string,
        second: string,
        third: string,
        fourth: string,
    ]
}
