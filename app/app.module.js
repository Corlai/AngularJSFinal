(function (angular) {
  'use strict';

  angular
    .module('app', [
      'app.comments',
      'app.authors',
      'app.posts',
      'app.users',
      'app.books',
      'ngRoute'
    ]);
})(window.angular);
