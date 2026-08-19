import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getCareerResults = (skills) => {

  return axios.post(`${BASE_URL}/career/results`, {
    skills: skills,
  });
  
};