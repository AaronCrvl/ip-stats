import React from 'react';
import axios from 'axios';
import { ipDataModel } from '../../apiModels/ipDataModel';

type myIp = {
    country_code: string,
    country_name: string,
    city: string,
    postal: string,
    latitude: string,
    longitude: string,
    IPv4: string,
    state: string,
}

const header = {

}

export function getMyIp () {
    try {
        return axios.get('https://geolocation-db.com/json/', header)
    }
    catch(err){        
        console.log('Erro in method getIp: ' + err)
    }
}

export function getIp (ip: string) {
    try {
        return axios.get('', header)
    }
    catch(err){
        console.log('Erro in method getIp: ' + err)
    }
}

