(function (angular) {
  'use strict';

  angular
    .module('app.users')
    .factory('usersService', usersService);

  usersService.$inject = [
    '$http'
  ];

  function usersService($http) {
    var urlRoot = 'https://fakerestapi.azurewebsites.net/api/';

    var service = {
      getUser: getUser,
      getUsers: getUsers,
      //getUserPosts : getUserPosts
    };

    return service;

    function getUsers() {
      return $http.get(urlRoot + 'users/')
        .then(complete)
        .catch(failed);
    }

    function getUser(userId) {
      return $http.get(urlRoot + 'users/' + userId)
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