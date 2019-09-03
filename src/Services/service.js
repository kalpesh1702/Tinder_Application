import Axios from 'axios';

export const axiosGET = (URI,params = null) => {
	return Axios.get(URI,{params : params});
}