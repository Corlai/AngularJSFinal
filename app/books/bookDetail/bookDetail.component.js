(function (angular) {
  'use strict';
  
  angular
    .module('app.books')
    .component('bookDetail', bookDetail());
  
  function bookDetail() {
    var component = {
      templateUrl: '/app/books/bookDetail/bookDetail.component.html',
      controller: BookDetailController
    };
    return component;
  }
  
  BookDetailController.$inject = [
    '$routeParams',
    '$location',
    'booksService'
  ];
  
  function BookDetailController($routeParams, $location, booksService) {
    var ctrl = this;
    ctrl.viewBookDetails = viewBookDetails;
    ctrl.$onInit = onInit;

    function viewBookDetails(id) {
      $location.path('/books/' + id);
    }
  
    function onInit() {
      booksService.getBook($routeParams.id)
        .then(function (data) {
          ctrl.book = data;
          getBooks(data.id);
        });
    }
  
    function getBooks(id) {
      postsService.getBooks(id)
        .then(function (data) {
          ctrl.books = data;
        });
    }

    function getAuthorBooks(id) {
      authorsService.getAuthorBooks(id)
        .then(function (data) {
          ctrl.books = data;
        });
    }
  }
})(window.angular);
  