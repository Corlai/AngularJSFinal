(function (angular) {
  'use strict';
  
  angular
    .module('app.authors')
    .component('author', author());
  
  function author() {
    var component = {
      templateUrl: '/app/authors/author/author.component.html',
      controller: AuthorController,
      bindings: {
        author: '<',
      }
    };
    return component;
  }
  
  function AuthorController() { }
})(window.angular);
  