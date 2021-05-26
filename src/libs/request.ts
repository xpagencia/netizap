import axios from 'axios';
import qs from 'qs';

const post = async (url: string, body: object = {}, headers: any = {}) => {
  let retorno: object;
  let data: string;

  const headersLocal = {
    "Content-Type": "application/json"
  };
  headers = {
    ...headersLocal,
    ...headers
  };
  
  if (headers["Content-Type"] == "application/x-www-form-urlencoded") {
    data = qs.stringify(body);  
  } else {
    data = JSON.stringify(body);
  }  

  try {
    const response = await axios.post(url, data, { headers });
    retorno = response.data;      
  } catch (error) {
    if (error.response) {
        /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
        
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
          */
    } else if (error.request) {
        /*
          * The request was made but no response was received, `error.request`
          * is an instance of XMLHttpRequest in the browser and an instance
          * of http.ClientRequest in Node.js
          
        console.log(error.request);
        */
    } else {
        // Something happened in setting up the request and triggered an Error
        //console.log('Error', error.message);
    }
    //console.log(error);
    retorno = {
        error: error
    }
  }
  return retorno;
}

const get = async (url: string, headers: object = {}) => {
  let retorno: object;

  const headersLocal = {
    "Content-Type": "application/json"
  };
  headers = {
    ...headersLocal,
    ...headers
  };
  
  try {
    const response = await axios.get(url, { headers });
    retorno = response.data;      
  } catch (error) {
    retorno = {
        error: error
    }
  }
  return retorno;
}


module.exports = { post, get }
export default post;

