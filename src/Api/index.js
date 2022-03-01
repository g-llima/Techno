import axios from "axios";

const postUrl = "http://localhost:5000/posts";
const registerUrl = "http://localhost:5000/register";

export const fetchPosts = () => axios.get(postUrl);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const registerAuth = (userData) => axios.post(registerUrl, userData);
