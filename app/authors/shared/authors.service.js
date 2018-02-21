(function (angular) {
  'use strict';
  
  angular
    .module('app.authors')
    .factory('authorsService', authorsService);
  
  authorsService.$inject = [
    '$http'
  ];
  
  function authorsService($http) {
    var urlRoot = 'https://fakerestapi.azurewebsites.net/';
  
    var service = {
      getAuthor: getAuthor, //Author
      getAuthors: getAuthors, //Autores
      getAuthorBooks : getAuthorBooks //Libros por autor
    }; 
    return service;
  
    function getAuthors() {
      return $http.get(urlRoot + 'api/Authors/')
        .then(complete)
        .catch(failed);
    }
  
   function getAuthor(authorId) {
     console.log("en authorsService para getAuthor recibo: authorId " + authorId);
      return $http.get(urlRoot + 'api/Authors/' + authorId)
        .then(complete)
        .catch(failed);
    }
  
    //authors/books/1'
    function getAuthorBooks(authorId) {
      return $http.get(urlRoot + 'authors/books/' + authorId)
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