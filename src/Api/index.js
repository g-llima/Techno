import axios from "axios";

const postUrl = "http://localhost:5000/posts";
const registerUrl = "http://localhost:5000/register";
const loginUrl = "http://localhost:5000/register/login";

export const fetchPosts = () => axios.get(postUrl);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const registerAuth = (userData) => axios.post(registerUrl, userData);
export const loginAuth = (userData) => axios.post(loginUrl, userData);
