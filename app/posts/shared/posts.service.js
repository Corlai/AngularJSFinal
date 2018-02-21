(function (angular) {
  'use strict';

  angular
    .module('app.posts')
    .factory('postsService', postsService);

  postsService.$inject = [
    '$http'
  ];

  function postsService($http) {
    var urlRoot = 'https://jsonplaceholder.typicode.com/';

    var service = {
      getPost: getPost,
      getPosts: getPosts,
      postPost: postPost,
      getComments: getComments,
      getUsers: getUsers,
    };

    return service;

    function getPosts() {
      return $http.get(urlRoot + 'posts/')
        .then(complete)
        .catch(failed);
    }

    function getPost(postId) {
      return $http.get(urlRoot + 'posts/' + postId)
        .then(complete)
        .catch(failed);
    }

    function postPost(post) {
      var postUrl = urlRoot + 'posts/';
      return $http.post(postUrl, post)
        .then(complete)
        .catch(failed);
    }

    function getComments(id) {
      return $http.get(urlRoot + 'posts/' + id + '/comments')
        .then(complete)
        .catch(failed);
    }

    function getUsers() {
      return $http.get(urlRoot + 'users/')
        .then(complete)
        .catch(failed);
    }

    function complete(response) {
      return response.data;
    }

    function failed(error) {
      console.error(error.data);
    }
  }
})(window.angular);