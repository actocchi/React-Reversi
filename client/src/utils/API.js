 const axios = require("axios") ;

const API = {  
  auth: function (name, password) {
    console.log(name, password)
    return axios.post(`/api/auth/`, {
      name: name,
      password: password,
    })  
  },

  createProfile: function (name, password) {

  }

  //   // Gets all posts
  //   getPosts: function() {
  //     return axios.get("/api/posts");
  //   },
  //   // Gets the post with the given id
  //   getPost: function(id) {
  //     return axios.get("/api/posts/" + id);
  //   },
  //   // Deletes the post with the given id
  //   deletePost: function(id) {
  //     return axios.delete("/api/posts/" + id);
  //   },
  //   // Saves a post to the database
  //   savePost: function(postData) {
  //     return axios.post("/api/posts", postData);
  //   }
};

module.exports = API

