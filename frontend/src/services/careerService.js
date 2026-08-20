import axios from "axios";

const BASE_URL = "https://career-graph-1.onrender.com/api";

export const getCareerResults = (skills) => {

  return axios.post(`${BASE_URL}/career/results`, {
    skills: skills,
  });
  
};