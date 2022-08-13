import axios from "axios";
import { BASE_URL } from "../config";

export async function login(body: Object) {
  return await axios.post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      return response.data;
    }).catch((error) => {
      return error;
    })
}

export async function register(body: Object) {
  return await axios.post(`${BASE_URL}/users/register`, body)
    .then((response) => {
      return response.data;
    }).catch((error) => {
      return error.response;
    })
}