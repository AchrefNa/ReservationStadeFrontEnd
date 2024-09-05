import axios from "axios";


const REST_API_BASE_URL='http://localhost:8060/api/users';
export const ListUtilisateur = () => axios.get(REST_API_BASE_URL) ;
  

