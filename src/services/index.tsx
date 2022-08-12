import axios from "axios";
import { BASE_URL } from "../config";

export async function createPost(body: any) {
  console.log("createPost", body);
  return await axios.post(`${BASE_URL}/posts`, body).then((response) => {
    console.log(response);
    return response.data;
  }).catch((error) => {
    console.log(error);
  });
}

export async function fetchPosts() {
  return await axios.get(`${BASE_URL}/posts`).then((response) => {
    console.log(response.data);
    return response.data;
  }).catch((error) => {
    console.log(error);
  });
}

export async function deletePosts(id: string) {
  return await axios.delete(`${BASE_URL}/posts/${id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    }).catch((error) => {
      console.log(error);
    }).then((response) => {
      console.log(response);
    })
}

export async function login(body: Object) {
  return await axios.post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    })
}