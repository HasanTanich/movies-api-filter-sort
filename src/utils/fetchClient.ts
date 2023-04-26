import axios from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://moviesminidatabase.p.rapidapi.com/';

// returns a promise resolved after a given delay
function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

// To have autocompletion and avoid mistypes
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null, // we can send any data to the server
): Promise<T> {
  const api_key = import.meta.env.VITE_RAPIDAPI_KEY;
  // TODO
  // Check for authentication for the requests with data
  if(data){
    console.log(data);
  }
  
  const options = {
    method: method,
    url: BASE_URL + url,
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': api_key,
    }
  };
  // we wait for testing purpose to see loaders
  return wait(300)
    .then(() => axios.request(options))
    .then(response => {
      return response.data;
    }).catch(error => {
      console.error(error);
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  PUT: <T>(url: string, data: any) => request<T>(url, 'PUT', data),
  delete: (url: string) => request(url, 'DELETE'),
};
