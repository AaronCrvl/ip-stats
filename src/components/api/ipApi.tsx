import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { ipDataModel } from '../../types/ipDataModel';
import { myIp } from '../../types/myIp';

export async function getMyIp(): Promise<myIp> {
    try {      
      const { data, status } = await axios.get<myIp>(
        'https://geolocation-db.com/json/',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
  
      console.log(JSON.stringify(data, null, 4));        
      console.log('response status is: ', status);
  
      return data
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        throw(error.message)
      } 
      else {
        console.log('unexpected error: ', error);
        throw('An unexpected error occurred')
      }
    }
}

export async function getIp(ip: string): Promise<ipDataModel> {
    try {            
      const { data, status } = await axios.get<ipDataModel>(
        `http://api.ipstack.com/${ip}?access_key=${process.env.REACT_APP_API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
  
      console.log('Data: ' + JSON.stringify(data, null, 4));        
      console.log('Response Status: ', status);  
      return data
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        throw(error.message)
      } 
      else {
        console.log('unexpected error: ', error);
        throw('An unexpected error occurred')
      }
    }
  }


