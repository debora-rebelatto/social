import axios from "axios";
import { BASE_URL } from "../config";

export const buildHeader = () => {
  return {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
}

export async function createPost(body: any) {
  const headers = buildHeader();

  return await axios.post(`${BASE_URL}/posts`, body, { headers })
  .then((response) => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}

export async function fetchPosts() {
  const headers = buildHeader();

  return await axios.get(`${BASE_URL}/posts`, { headers }).then((response) => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}

export async function deletePosts(id: string) {
  const headers = buildHeader();

  return await axios.delete(`${BASE_URL}/posts/${id}`, { headers })
    .then((response) => {
      return response.data;
    }).catch((error) => {
      return error;
    });
}

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