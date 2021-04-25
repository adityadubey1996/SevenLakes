var axios = require('axios').default
let BASE_URL = 'https://jsonplaceholder.typicode.com'
const Comments = (data) => {
  fetch()
}

const Post = (data) => {
  return axios.get(`${BASE_URL}/posts`)
}

const Users = (data) => {
  return axios.get(`${BASE_URL}/users`)
}
const SingleUser = (Id) => {
  return axios.get(`${BASE_URL}/users/${Id}`)
}
const SinglePost = (ID) => {
  return axios.get(`${BASE_URL}/posts/${ID}`)
}
const SingleComments = (ID) => {
  return axios.get(`${BASE_URL}/comments?postId=${ID}`)
}
export default {
  Post,
  Comments,
  Users,
  SingleUser,
  SinglePost,
  SingleComments,
}
