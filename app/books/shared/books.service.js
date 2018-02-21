(function (angular) {
  'use strict';
  
  angular
    .module('app.books')
    .factory('booksService', booksService);
  
  booksService.$inject = [
    '$http'
  ];
  
  function booksService($http) {
    var urlRoot = 'http://fakerestapi.azurewebsites.net/';
  
    var service = {
      getBook: getBook, //libro
      getBooks: getBooks, //libros
      // getCoverBooks: getCoverBooks,
      // getCoverBook: getCoverBook,
      getAuthorBooks: getAuthorBooks //Libros por autor

    }; 
  
    return service;
  
    function getBooks() {
      return $http.get(urlRoot + 'api/Books/')
        .then(complete)
        .catch(failed);
    }
  
    function getBook(id) {
      return $http.get(urlRoot + 'api/Books/' + id)
        .then(complete)
        .catch(failed);
    }

    
    // function getCoverBooks() {
    //   return $http.get(urlRoot + 'CoverPhotos/')
    //     .then(complete)
    //     .catch(failed);
    // }

  
    // function getCoverBook(id) {
    //   return $http.get(urlRoot + 'api/CoverPhotos/' + id)
    //     .then(complete)
    //     .catch(failed);
  
    //authors/books/1'
    function getAuthorBooks(id) {
      return $http.get(urlRoot + 'books/book/' + id)
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