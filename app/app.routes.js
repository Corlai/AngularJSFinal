(function (angular) {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<b>Ejemplo de front-end para la API REST <a href="https://jsonplaceholder.typicode.com">JSONPlaceholder</a></b>'
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
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }
})(window.angular);
