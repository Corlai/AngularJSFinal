(function (angular) {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<div class="container"><b>Ejemplo de front-end para la API REST <img src="img/agular-webapi.png" class="img-fluid" /></b></div>'
      })
      .when('/users', {
        template: '<user-page></user-page>'
      })
      .when('/users/:userId', {
        template: '<user-detail></user-detail>'
      })
      .when('/posts', {
        template: '<post-page></post-page>'
      })
      .when('/posts/create', {
        template: '<post-create></post-create>'
      })
      .when('/posts/:postId', {
        template: '<post-detail></post-detail>'
      })
      .when('/comments', {
        template: '<comment-page></comment-page>'
      })
      .when('/authors', {
        template: '<author-page></author-page>'
    })
      .when('/authors/:authorId', {
        template: '<author-detail></author-detail>'
    })
    .when('/books', {
      template: '<book-page></book-page>'
  })
  .when('/books/:id', {
    template: '<book-detail></book-detail>'
})
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }
})(window.angular);
