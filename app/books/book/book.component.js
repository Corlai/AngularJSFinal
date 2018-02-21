(function (angular) {
  'use strict';
  
  angular
    .module('app.books')
    .component('book', book());
  
  function book() {
    var component = {
      templateUrl: '/app/books/book/book.component.html',
      controller: BookController,
      bindings: {
        book: '<',
      }
    };
    return component;
  }
  
  function BookController() { }
})(window.angular);
  