import axios from "axios";
import { BASE_URL } from "../config";
import { buildHeader } from "./index";

export async function createPost(body: any) {
  const headers = buildHeader();
  return await axios.post(`${BASE_URL}/posts`, body, { headers })
  .then((response) => {
    return response;
  }).catch((error) => {
    return error.response;
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
