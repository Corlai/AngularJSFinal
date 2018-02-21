(function (angular) {
  'use strict';

  angular
    .module('app.comments')
    .factory('commentsService', commentsService);

  commentsService.$inject = [
    '$http'
  ];

  function commentsService($http) {
    var urlRoot = 'https://jsonplaceholder.typicode.com/';

    var service = {
      getComment: getComment,
      getComments: getComments
    };

    return service;

    function getComment(commentId) {
      return $http.get(urlRoot + 'comments/' + commentId)
        .then(complete)
        .catch(failed);
    }

    function getComments() {
      return $http.get(urlRoot + 'comments/')
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