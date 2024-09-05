import axios from "axios";

const API_URL = "http://localhost:8060/api/auth/";

const register = (username, email, password, phoneNumber) => {
  console.log(username, email, password, phoneNumber)
  return axios.post(API_URL + "signup",{
    
      username, 
      email, 
      password,
       phoneNumber, 
  
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
      
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
