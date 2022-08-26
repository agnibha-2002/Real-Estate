import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '0805feb3f2msh0714c1b57971eaap15afc3jsn19f3f362f973' ,
    },
  });
    
  return data;
}